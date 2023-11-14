mapboxgl.accessToken = 'pk.eyJ1IjoibmlubGluIiwiYSI6ImNqanR0Zzc4bzI5b2Ezd2xlb2ZmbzdrOHMifQ.nhMfjVcApf7oZVzhlMnRLA';

const beforeMap = new mapboxgl.Map({
    container: 'before',
    style: 'mapbox://styles/ninlin/cloxeog8u012901qo7qaefhri',
    center: [18.0686, 59.3293],
    zoom: 11,
    maxZoom: 15,
    minZoom: 10
});

const afterMap = new mapboxgl.Map({
    container: 'after',
    style: 'mapbox://styles/mapbox/dark-v11',
    center: [18.0686, 59.3293],
    zoom: 11,
    maxZoom: 15,
    minZoom: 10
});

afterMap.on('load', () => {
    afterMap.addSource('portland', {
        'type': 'raster',
        'url': 'mapbox://ninlin.0en5mcal'
    });

    afterMap.addLayer({
        'id': 'portland',
        'source': 'portland',
        'type': 'raster'
    });
});

const container = '#comparison-container';
new mapboxgl.Compare(beforeMap, afterMap, container);
