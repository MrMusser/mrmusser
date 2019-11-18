import pandas as pd
import geopandas as gpd
from matplotlib import pyplot as plt


#use GeoPandas to read shapefile

filepath = 'Ward_from_2012/Ward_from_2012.shp'
dc_map = gpd.read_file(filepath)


#read csv file and combine into same dataframe as shapefile

dc_df = pd.read_csv('dc-race-pop.csv')
merged_map = dc_map.set_index("WARD").join(dc_df.set_index('ward'))


#set scale for color bar

vmin, vmax, = 0, 100


#fill in map for each year, save as separate files to be combined into a gif online

for year in [1990, 2000, 2010, 2013, 2014, 2016, 2017]:
    fig = merged_map.plot(column='black_{}'.format(year), cmap='binary', figsize=(10,8), linewidth=0.5, edgecolor='black', vmin=vmin, vmax=vmax, legend=True, norm=plt.Normalize(vmin=vmin, vmax=vmax))
    fig.axis('off')
    fig.set_title('Percentage of Residents Who Are Black by Ward', fontname='Times New Roman', fontsize=20)
    fig.annotate('{}'.format(year), xy=(0.1, 0.3), xycoords='figure fraction', horizontalalignment='left', verticalalignment='top', fontname='Times New Roman', fontsize=35)
    chart = fig.get_figure()
    chart.savefig('dc-race-{}.png'.format(year))