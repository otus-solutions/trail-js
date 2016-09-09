(function() {
    'use strict';

    angular.module('trail')
        .controller('clientCtrl', controller);

    controller.$inject = ['$scope'];

    function controller($scope) {
        var self = this;

        function consoleAction(value){
          console.log(value)
        }

        self.tracks = [{
            id: "",
            icon: "date_range",
            text: "(VIFC6) 06. No mês passado, qual foi aproximadamente sua renda familiar líquida? Considere a soma dos rendimentos, já com descontos, de todas as pessoas que contribuem regularmente para as despesas de sua casa. Escolha a opção que melhor corresponde à sua faixa de renda.",
            time: "",
            styleClass: "",
            click: consoleAction

        }, {
            id: "",
            icon: "looks_one",
            text: "As próximas perguntas se referem à sua vida familiar. Vamos começar com algumas perguntas sobre sua situação conjugal e filhos",
            time: "",
            styleClass: ""
        }, {
            id: "",
            icon: "exposure_zero",
            text: "(VIFC2)02. Seu cônjuge/companheiro(a) é: (LEIA AS ALTERNATIVAS)",
            time: "",
            styleClass: ""
        }, {
            id: "",
            icon: "radio_button_checked",
            text: "Agora vamos falar um pouco sobre as pessoas que moram atualmente com o(a) Sr(a). Vamos incluir também crianças e bebês.",
            time: "",
            styleClass: ""
        }, {
            id: "",
            icon: "check_box",
            text: "03. Quantos dias por semana o(a) Sr(a) faz atividades físicas fortes no seu tempo livre? Por ex.: correr, fazer ginástica de academia, pedalar em ritmo rápido, praticar esportes competitivos, etc.",
            time: "",
            styleClass: ""
        }, {
            id: "6",
            icon: "text_format",
            text: "05. Quantos dias por semana o(a) Sr(a) faz atividades físicas médias fora as caminhadas no seu tempo livre? Por ex.: nadar ou pedalar em ritmo médio, praticar esportes por diversão, etc.",
            time: "",
            styleClass: ""
        }, {
            id: "7",
            icon: "email",
            text: "07. Quantos dias por semana o(a) Sr(a) usa a bicicleta para ir de um lugar a outro?",
            time: "",
            styleClass: ""
        }, {
            id: "8",
            icon: "access_time",
            text: "CCEM6",
            time: "",
            styleClass: "md-primary"
        }, {
            id: "9",
            icon: "phone",
            text: "CCEM6",
            time: "",
            styleClass: ""
        }, {
            id: "10",
            icon: "message",
            text: "CCEM6",
            time: "",
            styleClass: "md-warn"
        }, {
            id: "11",
            icon: "image",
            text: "CCEM7",
            time: "",
            styleClass: ""
        }];
    }
})();
