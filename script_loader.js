(function() {
    var customizerScript = document.createElement('script');
    customizerScript.src = 'https://cdn.everypages.com/ghl-customizer/ghl_customizer.php?agency_id=pi5b1lo1';

    var themeScript = document.createElement('script');
    themeScript.src = 'https://builder.themarketerstoolkit.com/style.js';
    themeScript.id = 'themebuilder-script';
    themeScript.setAttribute('data-agency-id', 'pi5b1lo1');
    
    document.head.appendChild(customizerScript);
    document.head.appendChild(themeScript);
})();