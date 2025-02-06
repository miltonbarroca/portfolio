import React from "react";
import "./About.scss";

const About: React.FC = () => {
  return (
    <section className="about">
      <div className="container">
        <div className="subcontainer"><h2>Sobre Mim</h2></div>
        <p>
            Desde cedo, fui fascinado por tecnologia. Gostava de desmontar e montar computadores, entender como cada componente funcionava e buscar soluções para problemas técnicos. Esse interesse natural me levou a atuar como técnico de informática por muitos anos, adquirindo experiência em manutenção de hardware, suporte técnico e otimização de sistemas.
        </p>

        <p>
            Em 2023, ao ingressar na faculdade de Ciências da Computação, decidi aprofundar meus estudos na área de programação. Desde então, meu foco tem sido o desenvolvimento de soluções tecnológicas para otimizar processos e automatizar tarefas. Tenho experiência em Python, que utilizo para desenvolver bots e automações, além de conhecimento em HTML, CSS e JavaScript, aplicados na criação de interfaces web dinâmicas e responsivas. Também trabalho com MySQL, Node.js e controle de versão com Git e GitHub.
        </p>

        <p>
            Atualmente, atuo tanto no ambiente corporativo quanto como freelancer, desenvolvendo automação de processos, bots personalizados e aplicações web. No momento, estou focando meus estudos em desenvolvimento web, explorando frameworks modernos como React, TypeScript, Figma e Sass para construir aplicações escaláveis, performáticas e com um design mais refinado.
        </p>

        <p>
            Busco constantemente aprimorar minhas habilidades e aprender novas tecnologias para criar soluções mais eficientes.
        </p>

      </div>
    </section>
  );
};

export default About;