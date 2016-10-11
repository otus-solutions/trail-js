# Trail JS
Ferramenta para apresentação de trilha de elementos.
<br>

<img align="left" height="1000" src="https://raw.githubusercontent.com/wiki/ccem-dev/trail-js/images/trail.png">

## Utilização
Dependencias:
``` html
    <script src="node_modules/angular/angular.min.js"></script>
    <script src="node_modules/angular-material/angular-material.min.js"></script>
    <script src="node_modules/trail-js/dist/trail-min.js"></script>
    <link rel="stylesheet" href="node_modules/trail-js/dist/style.css">
```

Html:
``` html
<otus:trail nodes="controller.tracks"></otus:trail>
```
Angular
``` javascript
        self.tracks = [{
            id: "",
            icon: "date_range",
            text: "Nodo numero 1",
            time: "",
            styleClass: "md-hue-2",
            click: function callback(){alert('Hello World')}

        }, {
            id: "",
            icon: "looks_one",
            text: "Segundo nodo da lista",
            time: "",
            styleClass: "md-warn"
        }, {
            id: "",
            icon: "exposure_zero",
            text: "Terceira opção",
            time: "",
            styleClass: "md-accent"
        }, {
            id: "",
            icon: "radio_button_checked",
            text: "Ultima.",
            time: "",
            styleClass: "md-primary"
        }];

```
