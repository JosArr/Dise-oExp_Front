import {Component, ViewChild} from '@angular/core';
import {MatPaginator} from "@angular/material/paginator";

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent {
  @ViewChild(MatPaginator,{static:false}) Paginator!:MatPaginator
  preguntas=[
    {
      texto: "¿Qué tipo de productos puedo encontrar en HealthFood?",
      respuesta: "En HealthFood ofrecemos una variedad de alimentos saludables y orgánicos, " +
        "como frutas frescas, verduras, suplementos nutricionales y opciones sin gluten o veganas.",
      mostrarRespuesta: false
    },
    {
      texto: "¿De dónde provienen sus productos?",
      respuesta: "Trabajamos con proveedores locales y distribuidores de " +
        "confianza para ofrecer productos frescos y de alta calidad.",
      mostrarRespuesta: false
    },
    {
      texto: "¿HealthFood ofrece opciones para personas con dietas específicas, como veganos o celíacos?",
      respuesta: "Sí, tenemos productos para veganos, sin gluten y otras necesidades dietéticas especiales.",
      mostrarRespuesta: false
    },
    {
      texto: "¿Cuál es la política de devolución de HealthFood?",
      respuesta: "Si no estás satisfecho, contáctanos dentro de los 30 días para discutir opciones de devolución, " +
        "reembolso o cambio.",
      mostrarRespuesta: false
    },
    {
      texto: "¿HealthFood ofrece asesoramiento nutricional?",
      respuesta: "Nuestro equipo de expertos en nutrición está disponible para brindar asesoramiento personalizado.",
      mostrarRespuesta: false
    },
    {
      texto: "¿Cómo puedo mantenerme actualizado sobre ofertas y eventos de HealthFood?",
      respuesta: "Suscríbete a nuestro boletín o sigue nuestras redes sociales para recibir noticias y promociones.",
      mostrarRespuesta: false
    }
  ];

  toggleRespuesta(index: number){
    this.preguntas[index].mostrarRespuesta = !this.preguntas[index].mostrarRespuesta;
  }
}
