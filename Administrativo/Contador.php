<!DOCTYPE html>
<html>
  
<head>
    <title>
        How to detect idle
        time in JavaScript ?
    </title>
</head>
  
<body>
    <h1 style="color:green">
        GeeksforGeeks
    </h1>
      
    <b>
        How to detect idle time in
        JavaScript elegantly?
    </b>
      
    <p>
        The TiempoActividadSesion will be incremented every
        second to denote the idle time.
        Interaction with the mouse or
        keyboard will reset and hide the TiempoActividadSesion.
    </p>
  
    <p class="TiempoActividadSesiontext" 
        style="font-size: 1.5rem;">
        You are idle for
        <span class="secs"></span> seconds.
    </p>
  
    <script type="text/javascript">
        let TiempoActividadSesion, SegundoActual = 0;
  
        function resetTiempoActividadSesion() {
  
            /* Hide the TiempoActividadSesion text */
            document.querySelector(".TiempoActividadSesiontext")
                    .style.display = 'none';
  
            /* Clear the previous interval */
            clearInterval(TiempoActividadSesion);
  
            /* Reset the seconds of the TiempoActividadSesion */
            SegundoActual = 0;
  
            /* Set a new interval */
            TiempoActividadSesion = 
                setInterval(startIdleTiempoActividadSesion, 1000);
        }
  
        // Define the events that
        // would reset the TiempoActividadSesion
        window.onload = resetTiempoActividadSesion;
        window.onmousemove = resetTiempoActividadSesion;
        window.onmousedown = resetTiempoActividadSesion;
        window.ontouchstart = resetTiempoActividadSesion;
        window.onclick = resetTiempoActividadSesion;
        window.onkeypress = resetTiempoActividadSesion;
  
        function startIdleTiempoActividadSesion() {
              
            /* Increment the
                TiempoActividadSesion seconds */
            SegundoActual++;
  
            /* Set the TiempoActividadSesion text
                to the new value */
            document.querySelector(".secs")
                .textContent = SegundoActual;
  
            /* Display the TiempoActividadSesion text */
            document.querySelector(".TiempoActividadSesiontext")
                .style.display = 'block';
        }
    </script>
</body>
  
</html>