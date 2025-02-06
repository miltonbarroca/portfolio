import React from "react";
import "./About.scss";

const About: React.FC = () => {
  return (
    <section className="about">
      <div className="container">
        <div className="subcontainer"><h2>Sobre Mim</h2></div>
        <p>
            Desde cedo, fui fascinado por tecnologia. Gostava de desmontar e montar computadores, entender como cada componente funcionava e buscar soluções para problemas técnicos. Esse interesse natural me levou a atuar como <strong>técnico de informática</strong> por muitos anos, adquirindo experiência em <strong>manutenção de hardware, suporte técnico e otimização de sistemas</strong>.
        </p>

        <p>
            Em 2023, ao ingressar na <strong>faculdade de Ciências da Computação</strong>, decidi aprofundar meus estudos na área de programação. Desde então, meu foco tem sido o desenvolvimento de <strong>soluções tecnológicas</strong> para otimizar processos e automatizar tarefas. Tenho experiência em <strong>Python</strong>, que utilizo para desenvolver <strong>bots e automações</strong>, além de conhecimento em <strong>HTML, CSS e JavaScript</strong>, aplicados na criação de <strong>interfaces web dinâmicas e responsivas</strong>. Também trabalho com <strong>MySQL, Node.js</strong> e controle de versão com <strong>Git e GitHub</strong>.
        </p>

        <p>
            Atualmente, atuo tanto no ambiente corporativo quanto como freelancer, desenvolvendo <strong>automação de processos, bots personalizados e aplicações web</strong>. No momento, estou focando meus estudos em <strong>desenvolvimento web</strong>, explorando frameworks modernos como <strong>React, TypeScript, Figma e Sass</strong> para construir aplicações <strong>escaláveis, performáticas e com um design mais refinado</strong>.
        </p>

        <p>
            Busco constantemente aprimorar minhas habilidades e aprender novas tecnologias para criar <strong>soluções mais eficientes</strong>.
        </p>
      </div>
    </section>
  );
};

export default About;