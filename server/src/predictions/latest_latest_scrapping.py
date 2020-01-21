import requests
from bs4 import *
page = requests.get("https://www.ceicdata.com/en/india/minimum-support-price/minimum-support-price-kharif-crop-paddy-grade-a")
soup= BeautifulSoup(page.content,'html.parser')
trs = soup.find("table",{"class":"datapage-table js-datapage-table"}).find("tbody").find_all("tr")
for tr in trs:
    tds = tr.find_all('td')
    related_indicators = tds[0].find("a").text.strip().strip("\n")
    last = tds[1].find("p").text.strip().strip("\n")
    previous = tds[2].find("p").text.strip().strip("\n")
    frequency =tds[3].find("p").text.strip().strip("\n")
    print(related_indicators)
    print(last)
    print(previous)
    print(frequency)
    rangeintable = tds[4].find("p").text.strip().strip("\n")
    print(rangeintable)
