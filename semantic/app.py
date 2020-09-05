from flask import Flask
from flask import render_template
from sparquery import get_results


app = Flask(__name__)

endpoint_url = "https://query.wikidata.org/sparql"



@app.route('/')
def index():
    query = """SELECT ?g_nero_musical ?g_nero_musicalLabel WHERE {
            SERVICE wikibase:label { bd:serviceParam wikibase:language "es". }
            OPTIONAL {  }
            ?g_nero_musical wdt:P31 wd:Q188451.
            }"""
    return render_template('index.html', results = get_results(endpoint_url, query), artist = True, album = False, songs = False)


@app.route('/artists/<genreValue>')
def artists(genreValue):
    print(genreValue)
    query = """SELECT ?grupo_musical ?grupo_musicalLabel WHERE {
    SERVICE wikibase:label { bd:serviceParam wikibase:language "es". }
    OPTIONAL {  }
    ?grupo_musical wdt:P31 wd:Q215380.
    ?grupo_musical wdt:P136 wd:%s.
    }""" % (genreValue)
    return render_template('index.html', results = get_results(endpoint_url, query), artist = False, album = True, songs = False)


@app.route('/albums/<albumValue>')
def albums(albumValue):
    query = """SELECT * WHERE {
            SERVICE wikibase:label { bd:serviceParam wikibase:language "[AUTO_LANGUAGE],es". }
            ?_lbum wdt:P31 wd:Q482994.
            ?_lbum wdt:P175 wd:%s.
            ?_lbum rdfs:label ?name.
           FILTER(LANGMATCHES(LANG(?name), 'en'))
            }
            """ %(albumValue)
    print(get_results(endpoint_url, query))
    return render_template('index.html', results = get_results(endpoint_url, query), artist = False, album = False, songs = True)



app.run(debug = True)

