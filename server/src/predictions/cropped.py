import pandas as pd
from sklearn.neighbors import KNeighborsClassifier
from sklearn import metrics
import sys

a= []
for i in range(1,8):
    a.append(sys.argv[i])

data = pd.read_csv('./agri_ds.csv')

y = data['crop'].values
X = data.drop('crop',axis = 1).values

model = KNeighborsClassifier(n_neighbors = 5)
model.fit(X,y)

pred = model.predict([a])

# from sklearn import metrics
# print("Model Accuracy:",metrics.accuracy_score(y, pred)*100)
print(pred)


