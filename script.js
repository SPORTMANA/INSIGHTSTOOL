// script.js - (Optional, as it's already included in the HTML)
var divElement = document.getElementById('viz1704934456909');
var vizElement = divElement.getElementsByTagName('object')[0];
vizElement.style.width='1169px';
vizElement.style.height='877px';
var scriptElement = document.createElement('script');
scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
vizElement.parentNode.insertBefore(scriptElement, vizElement);
