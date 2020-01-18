from matplotlib import pyplot as plt
from matplotlib import colors as colors
from matplotlib import gridspec as gridspec
import seaborn as sns
import pandas as pd
import geopandas as gpd


#set filepath, read shape file, and change names to match GIWPS dataset

filepath = 'CHN_adm/CHN_adm1.shp'
province_map = gpd.read_file(filepath)
province_map.iat[18, 4] = 'Inner Mongolia'
province_map.iat[19, 4] = 'Ningxia'
province_map.iat[25, 4] = 'Sichuang'
province_map.iat[27, 4] = 'Xinjiang'
province_map.iat[28, 4] = 'Tibet'


#read GIWPS dataset

china_subnational = pd.read_csv('China_subnational.csv')


#combine the two data frames into one

merged_map = province_map.set_index("NAME_1").join(china_subnational.set_index('province'))


#set color scheme, use grid spec to construct layout

cmap='Reds'

fig = plt.figure(figsize=(10, 8), constrained_layout=True)
gs = fig.add_gridspec(3, 2)
f_ax1 = fig.add_subplot(gs[:-1, :])
f_ax1.set_title('WPSI Score by Province', fontname='Times New Roman', fontsize=18)
f_ax2 = fig.add_subplot(gs[-1, 0])
f_ax2.set_title('Mean Years of Schooling by Province', fontname='Times New Roman', fontsize=12)
f_ax3 = fig.add_subplot(gs[-1, -1])
f_ax3.set_title('Employment Rate by Province', fontname='Times New Roman', fontsize=12)


#plot maps of three different variables in the three different plots

mainmin, mainmax, maincenter = 0, 1, 0.5
mainnorm = colors.DivergingNorm(vmin=mainmin, vcenter=maincenter, vmax=mainmax)
cbar0=plt.cm.ScalarMappable(norm=mainnorm, cmap=cmap)
merged_map.plot(column='wpsi_val', cmap=cmap, linewidth=0.5, norm= mainnorm, ax=f_ax1, edgecolor='black')
f_ax1.axis('off')

sub1min, sub1max, sub1center = 0, 15, 7
sub1norm = colors.DivergingNorm(vmin=sub1min, vcenter=sub1center, vmax=sub1max)
cbar1=plt.cm.ScalarMappable(norm=sub1norm, cmap=cmap)
merged_map.plot(column='mean_school', cmap=cmap, linewidth=0.3, norm=sub1norm, ax=f_ax2, edgecolor='black')
f_ax2.axis('off')

sub2min, sub2max, sub2center = 30, 60, 45
sub2norm = colors.DivergingNorm(vmin=sub2min, vcenter=sub2center, vmax=sub2max)
cbar2=plt.cm.ScalarMappable(norm=sub2norm, cmap=cmap)
merged_map.plot(column='employment', cmap=cmap, linewidth=0.3, norm=sub2norm, ax=f_ax3, edgecolor='black')
f_ax3.axis('off')


#add the colorbars 

fig.colorbar(cbar0, ax=f_ax1)
fig.colorbar(cbar1, ax=f_ax2)
fig.colorbar(cbar2, ax=f_ax3)


#save image

plt.savefig('china-maps.png')