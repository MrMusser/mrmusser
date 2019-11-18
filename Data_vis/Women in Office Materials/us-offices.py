from matplotlib import pyplot as plt
from matplotlib import gridspec as gridspec
import pandas as pd


#read csv file

offices = pd.read_csv('us_women_offices.csv')


#initialize figure

plt.figure(figsize=(10, 6))


#add line graphs to top figure

ax1 = plt.subplot(2, 1, 1)
plt.plot(offices['year'], offices['congress'], color='black', linestyle='-')
plt.plot(offices['year'], offices['state_leg'], color='black', linestyle='-.')
plt.plot(offices['year'], offices['state_el'], color='black', linestyle=':')


#add legend, adjust axis markings, add title to top figure

L = ax1.legend(['Members of Congress', 'State Legislators', 'Statewide Elected Officials'], fontsize=12)
plt.setp(L.texts, family='Times New Roman')
ax1.set_title('Share of Women in Congress and State Office', fontname='Times New Roman', fontsize=16)
ax1.set_yticks([10, 20, 30, 40])
ax1.set_yticklabels(['10%', '20%', '30%', '40%'], fontname='Times New Roman', fontsize=12)
ax1.set_xticklabels(['1970', '1980', '1990', '2000', '2010', '2020'], fontname='Times New Roman', fontsize=12)


#add line graphs to bottom figure, twice for each version (once to add light shading and another to add solid line on top)

ax2 = plt.subplot(2, 1, 2)
ax2.fill_between(offices['year'], offices['r_women'], where=offices['r_women']>=0, color='red', alpha=0.1)
ax2.fill_between(offices['year'], offices['d_women'], where=offices['d_women']>=0, color='blue', alpha=0.1)
plt.plot(offices['year'], offices['r_women'], color='red')
plt.plot(offices['year'], offices['d_women'], color='blue')


#add legend, adjust axis markings, and add title to bottom figure

L = ax2.legend(['Republicans', 'Democrats'], fontsize=12)
plt.setp(L.texts, family='Times New Roman')
ax2.set_title("Percent of Women Among Each Party's Members of Congress", fontname='Times New Roman', fontsize=16)
ax2.set_yticks([0.1, 0.2, 0.3, 0.4])
ax2.set_yticklabels(['10%', '20%', '30%', '40%'], fontname='Times New Roman', fontsize=12)
ax2.set_xticklabels(['1970', '1980', '1990', '2000', '2010', '2020'], fontname='Times New Roman', fontsize=12)


#adjust space between figures and save image

plt.subplots_adjust(hspace=0.3)
plt.savefig('offices.png', bbox_inches='tight')