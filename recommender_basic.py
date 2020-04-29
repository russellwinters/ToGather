import pandas as pd
import numpy as np
from pymongo import MongoClient

client = MongoClient("mongodb+srv://rwuser:rwuser@cluster0-1clkf.mongodb.net/test?retryWrites=true&w=majority")
db = client['microsoft']
collection_games = db['games']
collection_users = db['users']

games = pd.DataFrame(list(collection_games.find()))
users = pd.DataFrame(list(collection_users.find()))

for i in users.index:
    #if player has not played any activities yet, recommend 3 random activities
    if np.any(pd.isna(users['playedActivities'][i]) == True):
        users.at[i, 'recommendedActivities'] = []
        nan_recommendations = games.sample(3)
        nan_recommendations.reset_index(inplace=True)
        for num in range(0,3):
            users['recommendedActivities'][i].append(str(nan_recommendations.get_value(num, '_id')))
    else:
        #recommend based on category of activities played
        for item in set(users['playedActivities'][i]):
            for id in games['_id']:
                if item == str(id):
                    #find the row in games
                    target_row = games.loc[games['_id'] == id]
                    #extract the category
                    target = target_row['category'][0]
                    #query for all activities that are target, but not its own
                    recommendations = games[games['category'] == target]
                    remove_index = recommendations[recommendations['_id'] == id].index
                    recommendations = recommendations.drop(remove_index)
                    #recommend 3 activities
                    game_recommendation_ids = recommendations.sample(3)
                    game_recommendation_ids.reset_index(inplace=True)
                    for num in range(0,3):
                        users['recommendedActivities'][i].append(str(game_recommendation_ids.get_value(num, '_id')))

users_dict = users.to_dict('records')
#currently outputs into a new temp table due to time constraints
#looking into updating the original table array
db.users_temp.insert_many(users.to_dict('records'))
