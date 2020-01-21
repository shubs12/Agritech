import pandas as pd
from sklearn.neighbors import KNeighborsClassifier
from sklearn import metrics

data = pd.read_csv('./agri_ds.csv')

y = data['crop'].values
X = data.drop('crop',axis = 1).values

model = KNeighborsClassifier(n_neighbors = 5)
model.fit(X,y)

pred = model.predict(X)

from sklearn import metrics
print("Model Accuracy:",metrics.accuracy_score(y, pred)*100)
