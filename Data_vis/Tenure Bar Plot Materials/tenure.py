import numpy as np
from matplotlib import pyplot as plt
import seaborn as sns
import pandas as pd


#read csv file 

tenure = pd.read_csv('tenure.csv')


#initialize figure

plt.figure(figsize=(10,5))
ax = plt.subplot()


#set x values for a double bar plot

f_xvals = [2*val + 0.8 for val in range(3)]
m_xvals = [2*val + 1.6 for val in range(3)]


#set bottom values for each layer of the stacked bars

ttrack_f_bottom = np.add(tenure['ptime_f'], tenure['nonttrack_f'])
tenure_f_bottom = np.add(ttrack_f_bottom, tenure['ttrack_f'])
ttrack_m_bottom = np.add(tenure['ptime_m'], tenure['nonttrack_m'])
tenure_m_bottom = np.add(ttrack_m_bottom, tenure['ttrack_m'])


#plot stacked bar plots

plt.bar(f_xvals, tenure['tenure_f'], bottom=tenure_f_bottom, color='lightgray', edgecolor='black')
plt.bar(f_xvals, tenure['ttrack_f'], bottom=ttrack_f_bottom, color='darkgray', edgecolor='black')
plt.bar(f_xvals, tenure['nonttrack_f'], bottom=tenure['ptime_f'], color='gray', edgecolor='black')
plt.bar(f_xvals, tenure['ptime_f'], color='dimgray', edgecolor='black')

plt.bar(m_xvals, tenure['ptime_m'], color='dimgray', edgecolor='black')
plt.bar(m_xvals, tenure['nonttrack_m'], bottom=tenure['ptime_m'], color='gray', edgecolor='black')
plt.bar(m_xvals, tenure['ttrack_m'], bottom=ttrack_m_bottom, color='darkgray', edgecolor='black')
plt.bar(m_xvals, tenure['tenure_m'], bottom=tenure_m_bottom, color='lightgray', edgecolor='black')


#add legend, adjust axis markings, add title

L = ax.legend(['Tenured', 'Tenure Track', 'Non-Tenure Track', 'Part-Time'], fontsize=12)
plt.setp(L.texts, family='Times New Roman')
ax.set_xticks([0.8, 1.2, 1.6, 2.8, 3.2, 3.6, 4.8, 5.2, 5.6])
ax.set_xticklabels(['Women', '\n1993', 'Men', 'Women', '\n2003', 'Men', 'Women', '\n2013', 'Men'], fontname='Times New Roman', fontsize=12)
plt.title('Composition of Male and Female Professors, 1993-2013', fontname='Times New Roman', fontsize=16)
plt.ylabel('Number of Professors', fontname='Times New Roman', fontsize=12)
ax.set_yticks([100000, 200000, 300000, 400000, 500000, 600000, 700000])
ax.set_yticklabels(['100,000', '200,000', '300,000', '400,000', '500,000', '600,000', '700,000'], fontname='Times New Roman', fontsize=12)


#save figure

plt.savefig('Tenure.png', bbox_inches='tight')