    $(document).ready(function(){
        
    });
    
    
    /*For bootstrap IE 10 support on windows 8 and windows mobile 8*/
    if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
    var msViewportStyle = document.createElement('style')
    msViewportStyle.appendChild(
        document.createTextNode(
        '@-ms-viewport{width:auto!important}'
        )
    )
    document.querySelector('head').appendChild(msViewportStyle)
    }
    
    