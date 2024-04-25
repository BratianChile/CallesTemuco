var wms_layers = [];


        var lyr_GoogleTraffic_0 = new ol.layer.Tile({
            'title': 'Google Traffic',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt?lyrs=h@159000000,traffic|seconds_into_week:-1&style=3&x={x}&y={y}&z={z}'
            })
        });
var format_CallesTemuco_1 = new ol.format.GeoJSON();
var features_CallesTemuco_1 = format_CallesTemuco_1.readFeatures(json_CallesTemuco_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CallesTemuco_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CallesTemuco_1.addFeatures(features_CallesTemuco_1);
var lyr_CallesTemuco_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CallesTemuco_1, 
                style: style_CallesTemuco_1,
                popuplayertitle: "CallesTemuco",
                interactive: true,
                title: '<img src="styles/legend/CallesTemuco_1.png" /> CallesTemuco'
            });

lyr_GoogleTraffic_0.setVisible(true);lyr_CallesTemuco_1.setVisible(true);
var layersList = [lyr_GoogleTraffic_0,lyr_CallesTemuco_1];
lyr_CallesTemuco_1.set('fieldAliases', {'fid': 'fid', 'shape_leng': 'shape_leng', 'st_length_': 'st_length_', 'Nom_Ruta': 'Nom_Ruta', 'Rol_Mop': 'Rol_Mop', 'Clase_Ruta': 'Clase_Ruta', 'Tipo_Carpe': 'Tipo_Carpe', 'Catego': 'Catego', 'Cod_Region': 'Cod_Region', });
lyr_CallesTemuco_1.set('fieldImages', {'fid': 'TextEdit', 'shape_leng': 'TextEdit', 'st_length_': 'TextEdit', 'Nom_Ruta': 'TextEdit', 'Rol_Mop': 'TextEdit', 'Clase_Ruta': 'TextEdit', 'Tipo_Carpe': 'TextEdit', 'Catego': 'TextEdit', 'Cod_Region': 'TextEdit', });
lyr_CallesTemuco_1.set('fieldLabels', {'fid': 'no label', 'shape_leng': 'no label', 'st_length_': 'no label', 'Nom_Ruta': 'inline label - always visible', 'Rol_Mop': 'no label', 'Clase_Ruta': 'no label', 'Tipo_Carpe': 'no label', 'Catego': 'no label', 'Cod_Region': 'no label', });
lyr_CallesTemuco_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});