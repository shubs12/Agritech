import requests
from bs4 import *
page = requests.get("https://www.ceicdata.com/en/india/minimum-support-price/minimum-support-price-kharif-crop-paddy-grade-a")
soup= BeautifulSoup(page.content,'html.parser')
trs = soup.find("table",{"class":"datapage-table js-datapage-table"}).find("tbody").find_all("tr")
related_indicators=[]
lasts=[]
previouslist=[]
frequencies=[]
ranges=[]
for tr in trs:
    tds = tr.find_all('td')
    related_indicator = tds[0].find("a").text.strip().strip("\n")
    last = tds[1].find("p").text.strip().strip("\n")
    previous = tds[2].find("p").text.strip().strip("\n")
    frequency =tds[3].find("p").text.strip().strip("\n")
    #print(related_indicator)
    #print(last)
    #print(previous)
    #print(frequency)
    rangeintable = tds[4].find("p").text.strip().strip("\n")
    #print(rangeintable)
    #print()
    related_indicators.append(related_indicator)
    lasts.append(last)
    previouslist.append(previous)
    frequencies.append(frequency)
    ranges.append(rangeintable)
print("Related indicators\t\t\t\t\t\t Last\t\t Previous        Frequency\t Range")
for i in range(len(lasts)):
    max_spaces =65
    #print(len(related_indicators[i]))
    remaining_spaces= max_spaces-len(related_indicators[i])
    print(related_indicators[i],end='')
    for j in range(remaining_spaces):
        print(" ",end='')
    print(lasts[i],"\t",previouslist[i],"\t",frequencies[i],"\t",ranges[i])
