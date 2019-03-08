'''
Team macaroni: Maryann Foley and Anton Danylenko
SoftDev2 pd8
K07 -- Import/Export Bank
2019-03-06
'''

from pymongo import MongoClient
import json

from pprint import pprint

SERVER_ADDR="46.101.242.188"
client=MongoClient(SERVER_ADDR,27017)
db=client.mongolia
collection=db.pokedex
print(client.test_database)
print(db.list_collection_names())

