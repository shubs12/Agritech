from bs4 import BeautifulSoup as b
import requests

url = "https://www.ceicdata.com/en/india/minimum-support-price/minimum-support-price-kharif-crop-paddy-grade-a"
h = requests.get(url)
soup = b(h.content,"html5lib")

table = soup.find('table',{'class': "datapage-table js-datapage-table"})
z = table.text
for i in z:
    z.insert(6, "\n")
print(z)
