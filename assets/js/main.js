document.write("<p>Estadisticas centro medico ñuñoa<p>");

const radiologia = [
  {
    Hora: "11:00",
    Especialista: "IGNACIO SCHULZ",
    Paciente: "FRANCISCA ROJAS",
    Rut: "9878782-1",
    Prevision: "FONASA",
  },
  {
    Hora: "11:30",
    Especialista: "FEDERICO SUBERCASEAUX",
    Paciente: "PAMELA ESTRADA",
    Rut: "15345241-3",
    Prevision: "ISAPRE",
  },
  {
    Hora: "15:00",
    Especialista: "FERNANDO WURTHZ",
    Paciente: "ARMANDO LUNA",
    Rut: "16445345-9",
    Prevision: "ISAPRE",
  },
  {
    Hora: "15:30",
    Especialista: "ANA MARIA GODOY",
    Paciente: "MANUEL GODOY",
    Rut: "17666419-0",
    Prevision: "FONASA",
  },
  {
    Hora: "16:00",
    Especialista: "PATRICIA SUAZO",
    Paciente: "RAMON ULLOA",
    Rut: "14989389-K",
    Prevision: "FONASA",
  },
];

const traumatologia = [
  {
    Hora: "8:00",
    Especialista: "MARIA PAZ ALTUZARRA",
    Paciente: "PAULA SANCHEZ",
    Rut: "15554774-5",
    Prevision: "FONASA",
  },
  {
    Hora: "10:00",
    Especialista: "RAUL ARAYA",
    Paciente: "ANGÉLICA NAVAS",
    Rut: "15444147-9",
    Prevision: "ISAPRE",
  },
  {
    Hora: "10:30",
    Especialista: "MARIA ARRIAGADA",
    Paciente: "ANA KLAPP",
    Rut: "17879423-9",
    Prevision: "ISAPRE",
  },
  {
    Hora: "11:00",
    Especialista: "ALEJANDRO BADILLA",
    Paciente: "FELIPE MARDONES",
    Rut: "1547423-6",
    Prevision: "ISAPRE",
  },
  {
    Hora: "11:30",
    Especialista: "CECILIA BUDNIK",
    Paciente: "DIEGO MARRE",
    Rut: "16554741-K",
    Prevision: "FONASA",
  },
  {
    Hora: "12:00",
    Especialista: "ARTURO CAVAGNARO",
    Paciente: "CECILIA MENDEZ",
    Rut: "9747535-8",
    Prevision: "ISAPRE",
  },
  {
    Hora: "12:30",
    Especialista: "ANDRES KANACRI",
    Paciente: "MARCIAL SUAZO",
    Rut: "11254785-5",
    Prevision: "ISAPRE",
  },
];

const dental = [
  {
    Hora: "8:30",
    Especialista: "ANDREA ZUÑIGA",
    Paciente: "MARCELA RETAMAL",
    Rut: "11123425-6",
    Prevision: "ISAPRE",
  },
  {
    Hora: "ISAPRE",
    Especialista: "MARIA PIA ZAÑARTU",
    Paciente: "ANGEL MUÑOZ",
    Rut: "9878789-2",
    Prevision: "ISAPRE",
  },
  {
    Hora: "11:30",
    Especialista: "SCARLETT WITTING",
    Paciente: "MARIO KAST",
    Rut: "7998789-5",
    Prevision: "FONASA",
  },
  {
    Hora: "13:00",
    Especialista: "FRANCISCO VON TEUBER ",
    Paciente: "KARIN FERNANDEZ",
    Rut: "18887662-K",
    Prevision: "FONASA",
  },
  {
    Hora: "13:30",
    Especialista: "EDUARDO VIÑUELA",
    Paciente: "HUGO SANCHEZ",
    Rut: "17665461-4",
    Prevision: "FONASA",
  },
  {
    Hora: "14:00",
    Especialista: "RAQUEL VILLASECA",
    Paciente: "ANA SEPULVEDA",
    Rut: "14441281-0",
    Prevision: "ISAPRE",
  },
];

const tabla_radiologia = [{
  title: "Radiologia",
  data: radiologia
},
{
  title:  "Traumatologia",
  data: traumatologia
},
{
  title: "Dental",
  data: dental
}
];

tabla_radiologia.forEach((value) => {
  const table = document.createElement("table");
  const thead = document.createElement("thead");
  const tbody = document.createElement("tbody");

  table.appendChild(thead);
  table.appendChild(tbody);

  document.getElementById("body").appendChild(table);

  const row1 = document.createElement("tr");
  const heading1 = document.createElement("th");
  heading1.innerHTML = value.title;
  const heading2 = document.createElement("th");
  heading2.innerHTML = "Hora";
  const heading3 = document.createElement("th");
  heading3.innerHTML = "Especialista";
  const heading4 = document.createElement("th");
  heading4.innerHTML = "Paciente";
  const heading5 = document.createElement("th");
  heading5.innerHTML = "Rut";
  const heading6 = document.createElement("th");
  heading6.innerHTML = "Prevision";

row1.appendChild(heading1);
row1.appendChild(heading2);
row1.appendChild(heading3);
row1.appendChild(heading4);
row1.appendChild(heading5);
row1.appendChild(heading6);
thead.appendChild(row1);
value.data.forEach((val) => {
  const row2 = document.createElement("tr");
  const row2_data1 = document.createElement("td");
  row2_data1.innerHTML = "||||||||||||||||||||||||";
  const row2_data2 = document.createElement("td");
  row2_data2.innerHTML = val.Hora;
  const row2_data3 = document.createElement("td");
  row2_data3.innerHTML = val.Especialista;
  const row2_data4 = document.createElement("td");
  row2_data4.innerHTML = val.Paciente;
  const row2_data5 = document.createElement("td");
  row2_data5.innerHTML = val.Rut;
  const row2_data6 = document.createElement("td");
  row2_data6.innerHTML = val.Prevision;

  row2.appendChild(row2_data1);
  row2.appendChild(row2_data2);
  row2.appendChild(row2_data3);
  row2.appendChild(row2_data4);
  row2.appendChild(row2_data5);
  row2.appendChild(row2_data6);
  tbody.appendChild(row2);
})
});

document.write(
  "Primera atención radiologia: " +
    `${radiologia[0].Paciente}` +
    " - " +
    `${radiologia[0].Prevision}` +
    " | Última atención: " +
    `${radiologia[4].Paciente}` +
    " - " +
    `${radiologia[4].Prevision}` + `</br>`
);

document.write(
  "Primera atención traumatologia: " +
  `${traumatologia[0].Paciente}` +
  " - " +
  `${traumatologia[0].Prevision}` +
    " | Última atención: " +
    `${traumatologia[4].Paciente}` +
    " - " +
    `${traumatologia[4].Prevision}` + `</br>`
);

document.write(
  "Primera atención dental: " +
    `${dental[0].Paciente}` +
    " - " +
    `${dental[0].Prevision}` +
    " | Última atención: " +
    `${dental[4].Paciente}` +
    " - " +
    `${dental[4].Prevision}`
);
