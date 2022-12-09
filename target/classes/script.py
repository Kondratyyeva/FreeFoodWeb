import sys
# import numpy as np # linear algebra
import pandas as pd # data processing, CSV file I/O (e.g. pd.read_csv)
from sklearn.model_selection import train_test_split, cross_val_score
from sklearn.linear_model import LogisticRegression
import pickle


model =  pickle.load(open('src/main/resources/model.sav', 'rb'))
data = pd.DataFrame.from_dict({'age':[int(sys.argv[1])],
                               'gender':[int(sys.argv[2])],
                               'vaccination':[int(sys.argv[3]) % 6 + 1],
                               'crowd':[int(sys.argv[4])],
                               'mask':[int(sys.argv[5])],
                               'population':[int(sys.argv[6])]})
print(model.predict_proba(data)[0][1])
