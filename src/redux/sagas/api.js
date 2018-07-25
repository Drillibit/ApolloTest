export const API = {
  BASE_URL: 'https://api.themoviedb.org',
  KEY: '4493befd452f5d5eeea5c9d2de1306a8',
  VERSION: 3
};


/*
  template for API request:

url: 'https://api.themoviedb.org'
apiVersion: '3'
findingMethod: 'search/' | 'discover/' | 'find/'
content: 'movie/' | 'tv/' | 'serials/'
?
api_key=4493befd452f5d5eeea5c9d2de1306a8
&
query='{filmName}'

method: get
*/
