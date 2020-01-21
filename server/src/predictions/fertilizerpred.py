import numpy as np 
import pandas as pd
from sklearn.neighbors import KNeighborsClassifier
from sklearn import metrics
import sys

a= []
for i in range(1,10):
    a.append(sys.argv[i])

data = pd.read_csv('./FertPredictDataset.csv')

y = data['class'].values
X = data.drop('class',axis = 1).values

knn = KNeighborsClassifier(n_neighbors = 6)
knn.fit(X,y)

y_pred = knn.predict([a])

# print(a)
print(y_pred)

#Set for 9 parameters(Ca,Mg,K,S,N,Lime,C,P,Moisture)
