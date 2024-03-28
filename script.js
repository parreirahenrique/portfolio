const themeSwitch = document.getElementById("theme-switch");
const rootElement = document.documentElement;
const sidebarImage = document.getElementById("sidebar-icon");
const copyButtons = document.getElementsByClassName("copy-button");
const demoUserParagraphs = document.getElementsByClassName("demo-user-paragraph");
let circleindicatorColor = ["#E0E0E0", "#808080"];

const languageSwitch = document.getElementById("language-switch");
const navigationAnchors = document.getElementsByClassName("header-anchor");
const languagePlaceholder = document.getElementById("language-placeholder");
const themePlaceholder = document.getElementById("theme-placeholder");
const resumeButton = document.getElementById("cv-anchor");
const resumeText = document.getElementById("cv-text");
const sectionTitles = document.getElementsByClassName("section-title");
const homeParagraph = document.getElementById("home-paragraph");
const aboutMeParagraphs = document.getElementsByClassName("about-me-paragraph");
const certificationTitles = document.getElementsByClassName("certification-title");
const projectTitles = document.getElementsByClassName("project-title");
const projectParagraphs = document.getElementsByClassName("project-paragraph");
const usedLanguagesTitles = document.getElementsByClassName("used-languages-title");
const demoUserTitle = document.getElementsByClassName("demo-user-title");
const checkProjectButtons = document.getElementsByClassName("check-button");
const repositoryButtons = document.getElementsByClassName("repository-button");
const projects = document.getElementsByClassName("project");
const innerLanguageDescriptions = document.getElementsByClassName("inner-language-description");

const descriptionContainer = document.getElementById("description-container");
const html5Tr = document.getElementById("html5");
const css3Tr = document.getElementById("css3");
const bootstrapTr = document.getElementById("bootstrap");
// React element comes here
const pythonTr = document.getElementById("python");
const fastapiTr = document.getElementById("fastapi");
const flaskTr = document.getElementById("flask");
const djangoTr = document.getElementById("django");
const javascriptTr = document.getElementById("javascript");
const csharpTr = document.getElementById("csharp");
// Java element comes here
const sqlTr = document.getElementById("sql");
const descriptionTitle = document.getElementById("description-title");
const descriptionText = document.getElementById("description-text");
const certificationContents = document.getElementsByClassName("certification-content");
const certificationDates = document.getElementsByClassName("certification-date");
const certificationWorkloads = document.getElementsByClassName("certification-workload");
const certificationButtons = document.getElementsByClassName("check-certification");

const sidebarButton = document.getElementById("sidebar-button");
const sidebarContainer = document.getElementById("sidebar-container");

const nameInput = document.getElementById("name-input");
const emailInput = document.getElementById("email-input");
const subjectInput = document.getElementById("subject-input");
const messageInput = document.getElementById("message-input");

const languageAnchors = document.getElementsByClassName("language-anchor");

const btnLeft = document.getElementById('btn-left');
const btnRight = document.getElementById('btn-right');

var clickCounter = 0;

function changeTheme() {
    if (themeSwitch.checked) {
        rootElement.style.setProperty("--anchor-hover", "linear-gradient(rgba(255, 255, 255, .8), rgba(255, 255, 255, .8)100%)");
        rootElement.style.setProperty("--nav-background-color", "black");
        sidebarImage.style.filter = "invert(100%)";
        rootElement.style.setProperty("--sidebar-background-color", "rgba(0, 0, 0, .95)")
        rootElement.style.setProperty("--paragraph-font-color", "white");
        rootElement.style.setProperty("--title-font-color", "black");
        rootElement.style.setProperty("--container-background", "black");
        rootElement.style.setProperty("--button-font-color", "black");
        rootElement.style.setProperty("--dark-background", "linear-gradient(rgba(0, 0, 0, .85), rgba(0, 0, 0, .85)10%)");
        rootElement.style.setProperty("--light-background", "linear-gradient(rgba(0, 0, 0, .75), rgba(0, 0, 0, .75)10%)");
        rootElement.style.setProperty("--project-bottom-wrapper-background", "linear-gradient(rgba(0, 0, 0, .1), rgba(0, 0, 0, .1)100%)");
        rootElement.style.setProperty("--table-text-background", "linear-gradient(rgba(255, 255, 255, 0.4), rgba(255, 255, 255, .4))");
        circleindicatorColor = ["#E0E0E0", "#606060"];
        rotateContent("initial");

        for (let i = 0; i < copyButtons.length; i++) {
            copyButtons[i].style.filter = "invert(100%)";
        }

        for (let i = 0; i < demoUserParagraphs.length; i++) {
            demoUserParagraphs[i].style.filter = "invert(0%)";
        }
    } else {
        rootElement.style.setProperty("--anchor-hover", "linear-gradient(rgba(0, 0, 0, .2), rgba(0, 0, 0, .2)100%)");
        rootElement.style.setProperty("--nav-background-color", "white");
        sidebarImage.style.filter = "invert(0%)";
        rootElement.style.setProperty("--sidebar-background-color", "rgba(255, 255, 255, .95)")
        rootElement.style.setProperty("--paragraph-font-color", "black");
        rootElement.style.setProperty("--title-font-color", "white");
        rootElement.style.setProperty("--container-background", "white");
        rootElement.style.setProperty("--button-font-color", "white");
        rootElement.style.setProperty("--dark-background", "linear-gradient(rgba(0, 0, 0, .15), rgba(0, 0, 0, .15)100%)");
        rootElement.style.setProperty("--light-background", "linear-gradient(rgba(0, 0, 0, .05), rgba(0, 0, 0, .05)100%)");
        rootElement.style.setProperty("--project-bottom-wrapper-background", "linear-gradient(rgba(255, 255, 255, .5), rgba(255, 255, 255, .5)100%)");
        rootElement.style.setProperty("--table-text-background", "linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, .7))");
        circleindicatorColor = ["#606060", "#E0E0E0"];
        rotateContent("initial");

        for (let i = 0; i < copyButtons.length; i++) {
            copyButtons[i].style.filter = "invert(0%)";
        }

        for (let i = 0; i < demoUserParagraphs.length; i++) {
            demoUserParagraphs[i].style.filter = "invert(100%)";
        }
    }
}

function changeLanguage() {
    for (let i = 0; i < innerLanguageDescriptions.length; i++) {
        innerLanguageDescriptions[i].style.display = "none";
        innerLanguageDescriptions[i].style.visibility = "hidden";
    }

    descriptionTitle.innerText = "";
    descriptionText.innerText = "";
    descriptionContainer.style.visibility = "hidden";

    if (languageSwitch.checked) {
        navigationAnchors[0].innerText = "home";
        navigationAnchors[1].innerText = "about me";
        navigationAnchors[2].innerText = "habilities";
        navigationAnchors[3].innerText = "certifications";
        navigationAnchors[4].innerText = "projects";
        navigationAnchors[5].innerText = "contact";
        navigationAnchors[6].innerText = "home";
        navigationAnchors[7].innerText = "about me";
        navigationAnchors[8].innerText = "habilities";
        navigationAnchors[9].innerText = "certifications";
        navigationAnchors[10].innerText = "projects";
        navigationAnchors[11].innerText = "contact";

        languagePlaceholder.innerText = "language"
        themePlaceholder.innerText = "theme"

        resumeButton.href = "docs/CV - Henrique Parreira Castro (05-01-2024) - English.pdf";
        resumeText.innerText = "Résumé";

        sectionTitles[0].innerText = "About me";
        sectionTitles[1].innerText = "Habilities";
        sectionTitles[2].innerText = "Certifications";
        sectionTitles[3].innerText = "Projects";
        sectionTitles[4].innerText = "Contact";

        homeParagraph.innerHTML = "your next Full Stack Developer! <strong style=\"font-family: Arial, Helvetica, sans-serif;\" id=\"bold-smiley-face\"><font color=\"red\">:)</font></strong>"

        aboutMeParagraphs[0].innerText = "I am a Full Stack Developer eager to learn new technologies and programming languages. I have projects developed in Python, C#, JavaScript, HTML5, and CSS3.";
        aboutMeParagraphs[1].innerText = "In 2015, during my Electrical Engineering degree, I was first exposured to programming. We utilized the MATLAB software to perform the analysis of eletric power systems, an experience that brought to light my innate aptitude for software development.";
        aboutMeParagraphs[2].innerText = "The decision to transition to a career in development came in 2023, and since then, I have committed myself to ongoing learning and continual improvement, acquiring knowledge in new languages and technologies.";
        aboutMeParagraphs[3].innerText = "I hope to be able to work with you soon!";

        certificationTitles[0].innerText = "Introduction to Git and GitHub";
        certificationTitles[7].innerText = "Code versioning with Git and GitHub";
        certificationTitles[8].innerText = "Introduction to Relational Databases (SQL)";

        certificationContents[0].innerHTML = "<strong style=\"font-family: var(--title-font); font-size: 19px;\">Content: </strong>Code versioning fundamentals using Git and GitHub";
        certificationContents[1].innerHTML = "<strong style=\"font-family: var(--title-font); font-size: 19px;\">Content: </strong>HTML5, CSS3 and JavaScript fundamentals";
        certificationContents[2].innerHTML = "<strong style=\"font-family: var(--title-font); font-size: 19px;\">Content: </strong>Python fundamentals";
        certificationContents[3].innerHTML = "<strong style=\"font-family: var(--title-font); font-size: 19px;\">Content: </strong>Data analysis fundamentals, Pandas, Seaborn and Matplotlib libraries";
        certificationContents[4].innerHTML = "<strong style=\"font-family: var(--title-font); font-size: 19px;\">Content: </strong>Machine learning fundamentals, TensorFlow and Scikit-Learn libraries";
        certificationContents[5].innerHTML = "<strong style=\"font-family: var(--title-font); font-size: 19px;\">Content: </strong>C# e .NET Framework fundamentals";
        certificationContents[6].innerHTML = "<strong style=\"font-family: var(--title-font); font-size: 19px;\">Content: </strong>JavaScript fundamentals and its data structures";
        certificationContents[7].innerHTML = "<strong style=\"font-family: var(--title-font); font-size: 19px;\">Content: </strong>Code versioning fundamentals using Git and GitHub";
        certificationContents[8].innerHTML = "<strong style=\"font-family: var(--title-font); font-size: 19px;\">Content: </strong>SQL, databases and MariaDB fundamentals";

        certificationDates[0].innerHTML = "<strong style=\"font-family: var(--title-font); font-size: 19px;\">Date: </strong> 11/08/2021";
        certificationDates[1].innerHTML = "<strong style=\"font-family: var(--title-font); font-size: 19px;\">Date: </strong> 25/08/2021";
        certificationDates[2].innerHTML = "<strong style=\"font-family: var(--title-font); font-size: 19px;\">Date: </strong> 22/05/2023";
        certificationDates[3].innerHTML = "<strong style=\"font-family: var(--title-font); font-size: 19px;\">Date: </strong> 30/05/2023";
        certificationDates[4].innerHTML = "<strong style=\"font-family: var(--title-font); font-size: 19px;\">Date: </strong> 28/06/2023";
        certificationDates[5].innerHTML = "<strong style=\"font-family: var(--title-font); font-size: 19px;\">Date: </strong> 21/12/2023";
        certificationDates[6].innerHTML = "<strong style=\"font-family: var(--title-font); font-size: 19px;\">Date: </strong> 05/01/2024";
        certificationDates[7].innerHTML = "<strong style=\"font-family: var(--title-font); font-size: 19px;\">Date: </strong> 20/03/2024";
        certificationDates[8].innerHTML = "<strong style=\"font-family: var(--title-font); font-size: 19px;\">Date: </strong> 26/03/2024";

        certificationWorkloads[0].innerHTML = "<strong style=\"font-family: var(--title-font); font-size: 19px;\">Workload: </strong> 5 hours";
        certificationWorkloads[1].innerHTML = "<strong style=\"font-family: var(--title-font); font-size: 19px;\">Workload: </strong> 27 hours";
        certificationWorkloads[2].innerHTML = "<strong style=\"font-family: var(--title-font); font-size: 19px;\">Workload: </strong> 300 hours";
        certificationWorkloads[3].innerHTML = "<strong style=\"font-family: var(--title-font); font-size: 19px;\">Workload: </strong> 300 hours";
        certificationWorkloads[4].innerHTML = "<strong style=\"font-family: var(--title-font); font-size: 19px;\">Workload: </strong> 300 hours";
        certificationWorkloads[5].innerHTML = "<strong style=\"font-family: var(--title-font); font-size: 19px;\">Workload: </strong> 300 hours";
        certificationWorkloads[6].innerHTML = "<strong style=\"font-family: var(--title-font); font-size: 19px;\">Workload: </strong> 300 hours";
        certificationWorkloads[7].innerHTML = "<strong style=\"font-family: var(--title-font); font-size: 19px;\">Workload: </strong> 2 hours";
        certificationWorkloads[8].innerHTML = "<strong style=\"font-family: var(--title-font); font-size: 19px;\">Workload: </strong> 3 hours";

        for (let i = 0; i < certificationButtons.length; i++) {
            certificationButtons[i].innerText = "Check certification";
        }

        projectTitles[1].innerText = "Data input for photovoltaic projects";
        projectTitles[2].innerText = "Market place";
        projectTitles[3].innerText = "Music player";

        projectParagraphs[0].innerText = "GreatKart is a project developed for an online store of clothing and accessories. Customers, in order to make their purchases, must first register, and the validation of their user profiles is done via email to ensure authenticity and security. Buyers can quickly find desired products by searching either by product category or by its name. The products are added to their shopping cart, which is integrated with PayPal for quick and secure payment processing. Additionally, customers can rate and leave feedback on the purchased products, with a star rating system.";
        projectParagraphs[1].innerText = "Project developed during my time at the last company where I worked, due to the inefficiency found in filling out the spreadsheets and forms required for photovoltaic projects. To gain access, the person must have their username and password at hand, credentials that can only be created by the administrator. The registered user can then create, modify, or even delete instances in the database related to: clients (individuals who requested the project), installations (locations where the projects will be installed), inverters, photovoltaic modules, and finally, the project itself. The developed automation will then correctly fill out the necessary documents, which must be attached to the electrical distribution company's website.";
        projectParagraphs[2].innerText = "The Market Place is an online platform that allows its users to buy and sell various products. With a user authentication system, customers can create and manage their accounts to access the platform's functionalities. This includes the ability to add, edit, or delete products, provided they have been registered by the user themselves. Additionally, as previously described, they can purchase products listed by other users, provided they have sufficient credits for it.";
        projectParagraphs[3].innerText = "The project consists of a music player, which offers its user the essential functionalities of such an application: pausing, resuming, skipping forward or backward, and allows the user to shuffle the playlist. In total, 10 songs can be played, and users can remove unwanted tracks. An option to restart the playlist will be available if all songs are removed. Developed as a web player, the project uses copyright-free music provided by the website freeCodeCamp.org.";

        for (let i = 0; i < usedLanguagesTitles.length; i++) {
            usedLanguagesTitles[i].innerText = "Languages and frameworks used";
        }

        for (let i = 0; i < demoUserTitle.length; i++) {
            demoUserTitle[i].innerText = "Demo user";
        }

        for (let i = 0; i < checkProjectButtons.length; i++) {
            checkProjectButtons[i].innerText = "Check project"
        }

        for (let i = 0; i < repositoryButtons.length; i++) {
            repositoryButtons[i].innerText = "Repository"
        }

    } else {
        navigationAnchors[0].innerText = "página inicial";
        navigationAnchors[1].innerText = "sobre mim";
        navigationAnchors[2].innerText = "habilidades";
        navigationAnchors[3].innerText = "certificações";
        navigationAnchors[4].innerText = "projetos";
        navigationAnchors[5].innerText = "contato";
        navigationAnchors[6].innerText = "página inicial";
        navigationAnchors[7].innerText = "sobre mim";
        navigationAnchors[8].innerText = "habilidades";
        navigationAnchors[9].innerText = "certificações";
        navigationAnchors[10].innerText = "projetos";
        navigationAnchors[11].innerText = "contato";

        languagePlaceholder.innerText = "idioma"
        themePlaceholder.innerText = "tema"

        resumeButton.href = "docs/CV - Henrique Parreira Castro (05-01-2024).pdf";
        resumeText.innerText = "Currículo";

        sectionTitles[0].innerText = "Sobre mim";
        sectionTitles[1].innerText = "Habilidades";
        sectionTitles[2].innerText = "Certificações";
        sectionTitles[3].innerText = "Projetos";
        sectionTitles[4].innerText = "Contato";

        homeParagraph.innerHTML = "seu próximo Desenvolvedor Full Stack! <strong style=\"font-family: Arial, Helvetica, sans-serif;\" id=\"bold-smiley-face\"><font color=\"red\">:)</font></strong>"

        aboutMeParagraphs[0].innerText = "Sou um Desenvolvedor Full Stack ávido por conhecer novas tecnologias e linguagens de programação. Tenho projetos elaborados em Python, C#, JavaScript, HTML5 e CCS3.";
        aboutMeParagraphs[1].innerText = "Em 2015, durante minha graduação em Engenharia Elétrica, tive meu primeiro contato com programação. Utilizávamos o software MATLAB para realizar a análise de sistemas elétricos de potência, uma experiência que revelou minha aptidão inata para o desenvolvimento de software.";
        aboutMeParagraphs[2].innerText = "A decisão de realizar a transição de carreira para o campo do desenvolvimento veio em 2023, e desde então tenho dedicado meu tempo ao estudo e aprimoramento constante, adquirindo conhecimentos em novas linguagens e tecnologias.";
        aboutMeParagraphs[3].innerText = "Espero poder logo trabalhar com vocês!";

        certificationTitles[0].innerText = "Introdução to Git and GitHub";
        certificationTitles[7].innerText = "Versionamento de Código com Git e GitHub";
        certificationTitles[8].innerText = "Introdução a Banco de Dados Relacionais (SQL)";

        certificationContents[0].innerHTML = "<strong style=\"font-family: var(--title-font); font-size: 19px;\">Conteúdo: </strong> Fundamentos de versionamento de código usando Git e GitHub";
        certificationContents[1].innerHTML = "<strong style=\"font-family: var(--title-font); font-size: 19px;\">Conteúdo: </strong> Fundamentos de HTML5, CSS3 e JavaScript";
        certificationContents[2].innerHTML = "<strong style=\"font-family: var(--title-font); font-size: 19px;\">Conteúdo: </strong> Fundamentos de Python";
        certificationContents[3].innerHTML = "<strong style=\"font-family: var(--title-font); font-size: 19px;\">Conteúdo: </strong> Fundamentos de análise de dados, bibliotecas Pandas, Seaborn e Matplotlib";
        certificationContents[4].innerHTML = "<strong style=\"font-family: var(--title-font); font-size: 19px;\">Conteúdo: </strong> Fundamentos de machine learning, bibliotecas TensorFlow e Scikit-Learn";
        certificationContents[5].innerHTML = "<strong style=\"font-family: var(--title-font); font-size: 19px;\">Conteúdo: </strong> Fundamentos de C# e .NET Framework";
        certificationContents[6].innerHTML = "<strong style=\"font-family: var(--title-font); font-size: 19px;\">Conteúdo: </strong> Fundamentos de JavaScript e suas estruturas de dados";
        certificationContents[6].innerHTML = "<strong style=\"font-family: var(--title-font); font-size: 19px;\">Conteúdo: </strong> Fundamentos de versionamento de código usando Git e GitHub";
        certificationContents[7].innerHTML = "<strong style=\"font-family: var(--title-font); font-size: 19px;\">Conteúdo: </strong> Fundamentos de JavaScript e suas estruturas de dados";
        certificationContents[8].innerHTML = "<strong style=\"font-family: var(--title-font); font-size: 19px;\">Conteúdo: </strong> Fundamentos de SQL, bancos de dados e MariaDB";

        certificationDates[0].innerHTML = "<strong style=\"font-family: var(--title-font); font-size: 19px;\">Data: </strong> 11/08/2021";
        certificationDates[1].innerHTML = "<strong style=\"font-family: var(--title-font); font-size: 19px;\">Data: </strong> 25/08/2021";
        certificationDates[2].innerHTML = "<strong style=\"font-family: var(--title-font); font-size: 19px;\">Data: </strong> 22/05/2023";
        certificationDates[3].innerHTML = "<strong style=\"font-family: var(--title-font); font-size: 19px;\">Data: </strong> 30/05/2023";
        certificationDates[4].innerHTML = "<strong style=\"font-family: var(--title-font); font-size: 19px;\">Data: </strong> 28/06/2023";
        certificationDates[5].innerHTML = "<strong style=\"font-family: var(--title-font); font-size: 19px;\">Data: </strong> 21/12/2023";
        certificationDates[6].innerHTML = "<strong style=\"font-family: var(--title-font); font-size: 19px;\">Data: </strong> 05/01/2024";
        certificationDates[7].innerHTML = "<strong style=\"font-family: var(--title-font); font-size: 19px;\">Data: </strong> 20/03/2024";
        certificationDates[8].innerHTML = "<strong style=\"font-family: var(--title-font); font-size: 19px;\">Data: </strong> 26/03/2024";

        certificationWorkloads[0].innerHTML = "<strong style=\"font-family: var(--title-font); font-size: 19px;\">Carga horária: </strong> 5 horas";
        certificationWorkloads[1].innerHTML = "<strong style=\"font-family: var(--title-font); font-size: 19px;\">Carga horária: </strong> 27 horas";
        certificationWorkloads[2].innerHTML = "<strong style=\"font-family: var(--title-font); font-size: 19px;\">Carga horária: </strong> 300 horas";
        certificationWorkloads[3].innerHTML = "<strong style=\"font-family: var(--title-font); font-size: 19px;\">Carga horária: </strong> 300 horas";
        certificationWorkloads[4].innerHTML = "<strong style=\"font-family: var(--title-font); font-size: 19px;\">Carga horária: </strong> 300 horas";
        certificationWorkloads[5].innerHTML = "<strong style=\"font-family: var(--title-font); font-size: 19px;\">Carga horária: </strong> 300 horas";
        certificationWorkloads[6].innerHTML = "<strong style=\"font-family: var(--title-font); font-size: 19px;\">Carga horária: </strong> 300 horas";
        certificationWorkloads[7].innerHTML = "<strong style=\"font-family: var(--title-font); font-size: 19px;\">Carga horária: </strong> 2 horas";
        certificationWorkloads[8].innerHTML = "<strong style=\"font-family: var(--title-font); font-size: 19px;\">Carga horária: </strong> 3 horas";

        for (let i = 0; i < certificationButtons.length; i++) {
            certificationButtons[i].innerText = "Checar certificação";
        }

        projectTitles[1].innerText = "Entrada de dados para projetos fotovoltaicos";
        projectTitles[2].innerText = "Market place";
        projectTitles[3].innerText = "Reprodutor de músicas";

        projectParagraphs[0].innerText = "GreatKart é um projeto desenvolvido para uma loja virtual de roupas e acessórios. Os clientes, para realização de suas compras, devem primeiramente realizar um cadastro, e a validação de seus perfis de usuário é feita por e-mail, para garantir autenticidade e segurança. É possível que os compradores encontrem os produtos desejados de forma rápida fazendo uma pesquisa pela categoria do produto ou pelo seu nome. Os produtos são inseridos em seu carrinho de compras, que é integrado ao PayPal para processamento de pagamentos de forma rápida e segura. Além disso, os clientes podem avaliar e deixar feedback sobre os produtos adquiridos, com um sistema de classificação por estrelas.";
        projectParagraphs[1].innerText = "Projeto elaborado durante meu tempo na última empresa onde trabalhei, devido a ineficência encontrada no preenchimento das planilhas e formulários necessários aos projetos fotovoltaicos. Para ter acesso, a pessoa deve ter em mãos seu usuário e sua senha, credenciais essas que só podem ser criadas pelo administrador. O usuário cadastrado pode então criar, alterar ou mesmo deletar instâncias no banco de dados relativas a: clientes (pessoas que requisitaram o projeto), instalações (locais onde os projetos serão instalados), inversores, módulos fotovoltaicos e, por fim, o projeto. A automatização desenvolvida irá então preencher corretamente os documentos necessários, que devem ser anexados ao site da concessionária de energia.";
        projectParagraphs[2].innerText = "O  Market Place é uma plataforma online que permite aos seus usuários a compra e venda de diversos produtos. Com um sistema de autenticação de usuário, os clientes podem criar e gerenciar suas contas para acessar as funcionalidades da plataforma. Isso inclui a capacidade de adicionar, editar ou excluir produtos, desde que tenham sido cadastrados pelo próprio usuário. Além disso, como descrito anteriormente, ele pode realizar a compra de produtos dispostos por demais usuários, desde que tenha créditos suficientes para isso.";
        projectParagraphs[3].innerText = "O projeto consiste em um reprodutor de músicas, que oferece ao seu usuário as funcionalidades essenciais de um aplicativo como esse: pausar, retomar, avançar ou retroceder a faixa em reprodução, e permitir ao usuário reproduzir a playlist em ordem aleatória. A playlist é composta por 10 músicas, e os usuários podem remover as faixas indesejadas. Uma opção para reiniciar a playlist será disponibilizada caso todas as músicas sejam removidas. Desenvolvido como um reprodutor web, o projeto utiliza músicas sem direitos autorais disponibilizadas pelo site freeCodeCamp.org.";

        for (let i = 0; i < usedLanguagesTitles.length; i++) {
            usedLanguagesTitles[i].innerText = "Linguagens e frameworks utilizados"
        }

        for (let i = 0; i < demoUserTitle.length; i++) {
            demoUserTitle[i].innerText = "Usuário de demonstração"
        }

        for (let i = 0; i < checkProjectButtons.length; i++) {
            checkProjectButtons[i].innerText = "Checar projeto"
        }

        for (let i = 0; i < repositoryButtons.length; i++) {
            repositoryButtons[i].innerText = "Repositório"
        }
    }

    setHeight();
}

function changeDescription() {
    if (window.innerWidth >= 800) {
        innerLanguageDescriptions[0].style.display = "none";
        innerLanguageDescriptions[0].style.visibility = "hidden";
        innerLanguageDescriptions[1].style.display = "none";
        innerLanguageDescriptions[1].style.visibility = "hidden";
        innerLanguageDescriptions[2].style.display = "none";
        innerLanguageDescriptions[2].style.visibility = "hidden";
        innerLanguageDescriptions[3].style.display = "none";
        innerLanguageDescriptions[3].style.visibility = "hidden";
        innerLanguageDescriptions[4].style.display = "none";
        innerLanguageDescriptions[4].style.visibility = "hidden";
        innerLanguageDescriptions[5].style.display = "none";
        innerLanguageDescriptions[5].style.visibility = "hidden";
        innerLanguageDescriptions[6].style.display = "none";
        innerLanguageDescriptions[6].style.visibility = "hidden";
        innerLanguageDescriptions[7].style.display = "none";
        innerLanguageDescriptions[7].style.visibility = "hidden";
        innerLanguageDescriptions[8].style.display = "none";
        innerLanguageDescriptions[8].style.visibility = "hidden";

        descriptionContainer.style.visibility = "visible"

        if (html5Tr.matches(':hover')) {
            descriptionTitle.innerText = "HTML5";

            if (languageSwitch.checked) {
                descriptionText.innerText = "HTML5, or Hypertext Markup Language (HTML), is the fifth and most recent version of one of the pioneering and fundamental markup languages of the web. Essentially, HTML is employed in the development of pages that incorporate simple content, including text, images, audio, videos, and more.\n\nIn summary, this language plays a crucial role in formatting and facilitating the display of such a diverse range of content across virtually all currently available browsers in the market. HTML is deeply rooted in the early days of the web, contributing to the most fundamental structures of this platform.";
            } else {
                descriptionText.innerText = "HTML5, ou Hypertext Markup Language (HTML), é a quinta e mais recente versão de uma das linguagens de marcação pioneiras e fundamentais da web. Essencialmente, o HTML é empregado no desenvolvimento de páginas que incorporam conteúdos simples, abrangendo textos, imagens, áudio, vídeos, entre outros.\n\nEm resumo, essa linguagem desempenha um papel crucial ao formatar e viabilizar a visualização desse tipo diversificado de conteúdo em praticamente todos os navegadores atualmente disponíveis no mercado. O HTML está profundamente enraizado nos primórdios da web, contribuindo para as estruturas mais elementares dessa plataforma.";
            }
        } else if (css3Tr.matches(':hover')) {
            descriptionTitle.innerText = "CSS3";

            if (languageSwitch.checked) {
                descriptionText.innerText = "CSS3 stands as the third and most recent version of the renowned Cascading Style Sheets (or simply CSS), designed for defining styles in web projects. Introducing elements such as transition effects, image manipulation, background, and other features, it introduces an innovative and refined aesthetic to your online creations.\n\nEmerging in 2012, CSS3 incorporates the vast majority of innovations currently employed in web page styling. Preceding it are CSS2 and CSS, originating in 1998 and 1996, respectively.";
            } else {
                descriptionText.innerText = "CSS3 configura-se como a terceira e mais recente versão das chamadas Cascading Style Sheets (ou simplesmente CSS), destinadas à definição de estilos para projetos web. Introduzindo elementos como efeitos de transição, manipulação de imagens, background e outros recursos, confere uma estética inovadora e refinada às suas criações online.\n\nSurgindo em 2012, o CSS3 apresenta a grande maioria das inovações empregadas atualmente na estilização de páginas web. Antecedendo-a, encontram-se o CSS2 e o CSS, originados, respectivamente, em 1998 e 1996.";
            }
        } else if (bootstrapTr.matches(':hover')) {
            descriptionTitle.innerText = "Bootstrap";

            if (languageSwitch.checked) {
                descriptionText.innerText = "Bootstrap emerges as a front-end framework that provides CSS structures for the agile and straightforward construction of responsive websites and applications. Additionally, its capability extends to both desktop-oriented sites and pages optimized for mobile devices.\n\nOriginally conceived for Twitter by a group of developers led by Mark Otto and Jacob Thornton, Bootstrap, before evolving into an open-source framework, was known as Twitter Blueprint. After several months of development, during Twitter's first Hack Week, the project gained significant popularity, being embraced by developers of various skill levels without external guidance.";
            } else {
                descriptionText.innerText = "Bootstrap emerge como um framework front-end que disponibiliza estruturas de CSS para a construção ágil e descomplicada de websites e aplicações responsivas. Adicionalmente, sua capacidade abrange tanto sites destinados a desktops quanto páginas otimizadas para dispositivos móveis.\n\nInicialmente concebido para o Twitter por um grupo de desenvolvedores liderados por Mark Otto e Jacob Thornton, o Bootstrap, antes de se tornar uma estrutura de código aberto, era reconhecido como Twitter Blueprint. Após alguns meses de desenvolvimento, durante a primeira Hack Week do Twitter, o projeto angariou significativa popularidade, sendo adotado por desenvolvedores de diversos níveis de habilidade sem orientação externa.";
            }
        }

        // React logic comes here

        else if (pythonTr.matches(':hover')) {
            descriptionTitle.innerText = "Python";

            if (languageSwitch.checked) {
                descriptionText.innerText = "Python, a high-level programming language, is applied in various contexts, including desktop, web, servers, and data science. Conceived by Guido Van Rossum in the '90s, it aims to enhance the developer's experience by simplifying the creation of clear, straightforward, and readable code.\n\nThe language incorporates features such as dynamic and robust typing, object-oriented programming, multiparadigm support, and leverages powerful resources in its standard library, as well as through modules and frameworks developed by the community. Python is open-source, free to use, and compatible with nearly all operating systems.";
            } else {
                descriptionText.innerText = "Python, uma linguagem de programação de alto nível, é aplicada em diversos contextos, incluindo desktop, web, servidores e ciência de dados. Concebida por Guido Van Rossum na década de 90, visa aprimorar a experiência do desenvolvedor, simplificando a criação de código claro, direto e legível.\n\nA linguagem incorpora características como tipagem dinâmica e robusta, programação orientada a objetos, multiparadigmas, além de dispor de recursos poderosos em biblioteca padrão e por meio de módulos e frameworks desenvolvidos pela comunidade. Python é de código aberto, gratuito e compatível com quase todos os sistemas operacionais.";
            }
        } else if (fastapiTr.matches(':hover')) {
            descriptionTitle.innerText = "FastAPI";

            if (languageSwitch.checked) {
                descriptionText.innerText = "FastAPI is a Python framework focused on API development, with its main characteristics being modern, fast, and simple. It is a relatively new framework, with its first version released on November 15, 2018. However, don't be deceived: despite its novelty, it is not inferior to other frameworks in the market.\n\nAmong its extensive list of features, one that stands out is its automatic documentation. By default, it provides two options: Swagger UI (for interactive navigation, calling, and testing of your API directly from the browser) and an alternative, navigable API documentation with the ReDoc library.";
            } else {
                descriptionText.innerText = "O FastAPI é um framework Python focado no desenvolvimento de APIs, tendo como principais características ser moderno, rápido e simples. É um framework relativamente novo, e sua primeira versão lançada no dia 15 de Novembro de 2018. Contudo não se engane: apesar de novo, ele não é inferior aos outros frameworks do mercado.\n\nDentre sua grande lista de funcionalidades, uma das que mais se destacam é  sua documentação automática, uma vez que por padrão ele disponibiliza duas opções, sendo elas Swagger UI (para navegar de forma interativa, chamar e testar sua API diretamente do navegador) e documentação navegável e alternativa da API com a biblioteca ReDoc.";
            }
        } else if (flaskTr.matches(':hover')) {
            descriptionTitle.innerText = "Flask";

            if (languageSwitch.checked) {
                descriptionText.innerText = "Flask is a web development framework in Python known for its simplicity and flexibility. With it, you can quickly and efficiently create websites, web applications, and APIs. Its \"one drop at a time\" approach allows you to add functionalities gradually, starting with the simplest form of a website and then incrementally incorporating features.\n\nIt is labeled as a micro web development framework, but that doesn't mean it can't build complete solutions. This designation is precisely because it starts with simplicity and advances in complexity as functionalities are added. Due to this characteristic, it becomes lighter, easier to use, and more flexible, allowing for better control over applications.";
            } else {
                descriptionText.innerText = "O Flask é um framework de desenvolvimento web no Python conhecido por sua simplicidade e flexibilidade. Com ele, é possível criar sites, aplicativos web e APIs de forma rápida e eficiente. Sua abordagem “one drop at a time” permite adicionar funcionalidades gradualmente, tendo como ideia que você comece um site da forma mais simples possível e depois vá adicionando funcionalidades.\n\nEle é conhecido como um micro framework de desenvolvimento web, mas isso não significa que ele não desenvolva soluções completas. Essa nominação se dá justamente por ele começar simples e ir ficando mais complexo à medida que se acrescentam funcionalidades. Por essa característica, ele se torna mais leve, mais fácil de usar e mais flexível porque você pode conduzir melhor as aplicações.";
            }
        } else if (djangoTr.matches(':hover')) {
            descriptionTitle.innerText = "Django";

            if (languageSwitch.checked) {
                descriptionText.innerText = "Django is a Python web framework widely recognized for its efficiency and ease of use in developing robust and scalable web applications. Its modularity and extensibility offer a wide range of ready-to-use functionalities, such as user authentication, data administration, and ORM (Object-Relational Mapping), simplifying the process of web development and maintenance.\n\nWith a pragmatic approach and a philosophy of \"batteries-included\", Django provides a complete and cohesive web development experience, making it a popular choice among developers. Its strong community and extensive documentation ensure ongoing support, enabling developers to innovate and deliver value to end-users efficiently.";
            } else {
                descriptionText.innerText = "Django é um framework web em Python amplamente reconhecido pela sua eficiência e facilidade de uso no desenvolvimento de aplicações web robustas e escaláveis. Sua modularidade e extensibilidade oferecem uma ampla gama de funcionalidades prontas para uso, como autenticação de usuários, administração de dados e ORM (Object-Relational Mapping), simplificando o processo de desenvolvimento e manutenção de aplicações web.\n\nCom uma abordagem pragmática e uma filosofia de \"batteries-included\", Django fornece uma experiência de desenvolvimento web completa e coerente, tornando-o uma escolha popular entre os desenvolvedores. Sua forte comunidade e vasta documentação garantem suporte contínuo, permitindo que os desenvolvedores inovem e entreguem valor aos usuários finais de forma eficiente.";
            }
        } else if (javascriptTr.matches(':hover')) {
            descriptionTitle.innerText = "JavaScript";

            if (languageSwitch.checked) {
                descriptionText.innerText = "JavaScript, also known as JS, is a high-level interpreted programming language that enjoys widespread popularity. Its prevalence is primarily due to being the default language interpreted by browsers, forming, along with HTML (Hypertext Markup Language) and CSS (Cascading Style Sheets), the fundamental foundation of the Web.\n\nIn addition to its essential role in browsers, JavaScript finds application in various non-browser environments such as node.js, Apache CouchDB, and Adobe Acrobat, and can be utilized across all layers of development, whether it be front-end, back-end, or full stack.";
            } else {
                descriptionText.innerText = "JavaScript, conhecido carinhosamente como JS, é uma linguagem de programação interpretada de alto nível , desfrutando de uma ampla popularidade. Sua predominância deve-se, principalmente, ao fato de ser a linguagem padrão interpretada pelos navegadores, formando, juntamente com o HTML (HiperText Markup Language) e CSS (Cascading Style Sheets), a base fundamental da Web.\n\nAlém de ser essencial para navegadores, o JavaScript encontra aplicação em diversos ambientes sem navegador, como node.js, Apache CouchDB e Adobe Acrobat, podendo ser utilizada em todas as camadas de desenvolvimento, seja front-end, back-end ou full stack.";
            }
        } else if (csharpTr.matches(':hover')) {
            descriptionTitle.innerText = "C#";

            if (languageSwitch.checked) {
                descriptionText.innerText = "C# (pronounced as \"C Sharp\") is a modern, object-oriented, and strongly typed programming language that empowers developers to create applications on the .NET platform. With roots in the C language family, C# is immediately recognizable to proficient programmers in C, C++, Java, and JavaScript.\n\nProfessionals in desktop application development and/or web solutions find numerous advantages in adopting this technology. Moreover, it is widely used in the mobile landscape, creating flexible applications for various devices and platforms. It is also increasingly employed in game development, utilized with the Unity platform, providing a simplified creation experience.";
            } else {
                descriptionText.innerText = "O C# (pronunciado como \"C Sharp\") é uma linguagem de programação moderna, orientada a objetos e de tipagem forte, capacitando os desenvolvedores a criar aplicativos na plataforma .NET. Com raízes na família de linguagens C, o C# é imediatamente reconhecido por programadores proeficientes em C, C++, Java e JavaScript.\n\nProfissionais do desenvolvimento de aplicações desktop e/ou soluções web encontram inúmeras vantagens ao adotar essa tecnologia. Além disso, ela é amplamente utilizada no cenário mobile, criando aplicações flexíveis para diversos dispositivos e plataformas. Vem também sendo usada no desenvolvimento de jogos e empregada com a plataforma Unity, proporcionando uma experiência de criação simplificada.";
            }
        }

        // Java logic comes here

        else if (sqlTr.matches(':hover')) {
            descriptionTitle.innerText = "SQL";

            if (languageSwitch.checked) {
                descriptionText.innerText = "SQL, short for Structured Query Language, was created in the mid-1970s. The main motivation for  its creation was the complexity of data management systems. It is a standard language for working with relational databases, widely used by professionals in various fields, from data scientists to Excel users.\n\nThe SQL language is relatively similar among the main Database Management Systems (DBMS) in the market, such as Oracle, MySQL, MariaDB, PostgreSQL, Microsoft SQL Server, among others.";
            } else {
                descriptionText.innerText = "O SQL, abreviação de Structured Query Language, teve sua origem na metade da década de 1970, motivado principalmente pela complexidade dos sistemas de gerenciamento de dados. Trata-se de uma linguagem padrão para interação com bancos de dados relacionais, sendo amplamente adotada por profissionais de diversas áreas, desde cientistas de dados até usuários do Excel.\n\nA linguagem SQL apresenta uma notável semelhança entre os principais Sistemas Gerenciadores de Banco de Dados (SGBDs) disponíveis no mercado, incluindo Oracle, MySQL, MariaDB, PostgreSQL, Microsoft SQL Server, entre outros.";
            }
        }
    }
}

function changeDescriptionClick(element) {
    if (window.innerWidth < 800) {
        innerLanguageDescriptions[0].style.display = "none";
        innerLanguageDescriptions[0].style.visibility = "hidden";
        innerLanguageDescriptions[1].style.display = "none";
        innerLanguageDescriptions[1].style.visibility = "hidden";
        innerLanguageDescriptions[2].style.display = "none";
        innerLanguageDescriptions[2].style.visibility = "hidden";
        innerLanguageDescriptions[3].style.display = "none";
        innerLanguageDescriptions[3].style.visibility = "hidden";
        innerLanguageDescriptions[4].style.display = "none";
        innerLanguageDescriptions[4].style.visibility = "hidden";
        innerLanguageDescriptions[5].style.display = "none";
        innerLanguageDescriptions[5].style.visibility = "hidden";
        innerLanguageDescriptions[6].style.display = "none";
        innerLanguageDescriptions[6].style.visibility = "hidden";
        innerLanguageDescriptions[7].style.display = "none";
        innerLanguageDescriptions[7].style.visibility = "hidden";
        innerLanguageDescriptions[8].style.display = "none";
        innerLanguageDescriptions[8].style.visibility = "hidden";
        innerLanguageDescriptions[9].style.display = "none";
        innerLanguageDescriptions[9].style.visibility = "hidden";

        if (element.id === "html5") {
            innerLanguageDescriptions[0].style.display = "block";
            innerLanguageDescriptions[0].style.visibility = "visible"
            innerLanguageDescriptions[0].style["boxShadow"] = "0 4px 6px -6px gray";

            if (languageSwitch.checked) {
                innerLanguageDescriptions[0].innerText = "HTML5, or Hypertext Markup Language (HTML), is the fifth and most recent version of one of the pioneering and fundamental markup languages of the web. Essentially, HTML is employed in the development of pages that incorporate simple content, including text, images, audio, videos, and more.\n\nIn summary, this language plays a crucial role in formatting and facilitating the display of such a diverse range of content across virtually all currently available browsers in the market. HTML is deeply rooted in the early days of the web, contributing to the most fundamental structures of this platform.";
            } else {
                innerLanguageDescriptions[0].innerText = "HTML5, ou Hypertext Markup Language (HTML), é a quinta e mais recente versão de uma das linguagens de marcação pioneiras e fundamentais da web. Essencialmente, o HTML é empregado no desenvolvimento de páginas que incorporam conteúdos simples, abrangendo textos, imagens, áudio, vídeos, entre outros.\n\nEm resumo, essa linguagem desempenha um papel crucial ao formatar e viabilizar a visualização desse tipo diversificado de conteúdo em praticamente todos os navegadores atualmente disponíveis no mercado. O HTML está profundamente enraizado nos primórdios da web, contribuindo para as estruturas mais elementares dessa plataforma.";
            }
        } else if (element.id === "css3") {
            innerLanguageDescriptions[1].style.display = "block";
            innerLanguageDescriptions[1].style.visibility = "visible"
            innerLanguageDescriptions[1].style["boxShadow"] = "0 4px 6px -6px gray";

            if (languageSwitch.checked) {
                innerLanguageDescriptions[1].innerText = "CSS3 stands as the third and most recent version of the renowned Cascading Style Sheets (or simply CSS), designed for defining styles in web projects. Introducing elements such as transition effects, image manipulation, background, and other features, it introduces an innovative and refined aesthetic to your online creations.\n\nEmerging in 2012, CSS3 incorporates the vast majority of innovations currently employed in web page styling. Preceding it are CSS2 and CSS, originating in 1998 and 1996, respectively.";
            } else {
                innerLanguageDescriptions[1].innerText = "CSS3 configura-se como a terceira e mais recente versão das chamadas Cascading Style Sheets (ou simplesmente CSS), destinadas à definição de estilos para projetos web. Introduzindo elementos como efeitos de transição, manipulação de imagens, background e outros recursos, confere uma estética inovadora e refinada às suas criações online.\n\nSurgindo em 2012, o CSS3 apresenta a grande maioria das inovações empregadas atualmente na estilização de páginas web. Antecedendo-a, encontram-se o CSS2 e o CSS, originados, respectivamente, em 1998 e 1996.";
            }
        } else if (element.id === "bootstrap") {
            innerLanguageDescriptions[2].style.display = "block";
            innerLanguageDescriptions[2].style.visibility = "visible"
            innerLanguageDescriptions[2].style["boxShadow"] = "0 4px 6px -6px gray";

            if (languageSwitch.checked) {
                innerLanguageDescriptions[2].innerText = "Bootstrap emerges as a front-end framework that provides CSS structures for the agile and straightforward construction of responsive websites and applications. Additionally, its capability extends to both desktop-oriented sites and pages optimized for mobile devices.\n\nOriginally conceived for Twitter by a group of developers led by Mark Otto and Jacob Thornton, Bootstrap, before evolving into an open-source framework, was known as Twitter Blueprint. After several months of development, during Twitter's first Hack Week, the project gained significant popularity, being embraced by developers of various skill levels without external guidance.";
            } else {
                innerLanguageDescriptions[2].innerText = "Bootstrap emerge como um framework front-end que disponibiliza estruturas de CSS para a construção ágil e descomplicada de websites e aplicações responsivas. Adicionalmente, sua capacidade abrange tanto sites destinados a desktops quanto páginas otimizadas para dispositivos móveis.\n\nInicialmente concebido para o Twitter por um grupo de desenvolvedores liderados por Mark Otto e Jacob Thornton, o Bootstrap, antes de se tornar uma estrutura de código aberto, era reconhecido como Twitter Blueprint. Após alguns meses de desenvolvimento, durante a primeira Hack Week do Twitter, o projeto angariou significativa popularidade, sendo adotado por desenvolvedores de diversos níveis de habilidade sem orientação externa.";
            }
        } else if (element.id === "python") {
            innerLanguageDescriptions[3].style.display = "block";
            innerLanguageDescriptions[3].style.visibility = "visible"
            innerLanguageDescriptions[3].style["boxShadow"] = "0 4px 6px -6px gray";

            if (languageSwitch.checked) {
                innerLanguageDescriptions[3].innerText = "Python, a high-level programming language, is applied in various contexts, including desktop, web, servers, and data science. Conceived by Guido Van Rossum in the '90s, it aims to enhance the developer's experience by simplifying the creation of clear, straightforward, and readable code.\n\nThe language incorporates features such as dynamic and robust typing, object-oriented programming, multiparadigm support, and leverages powerful resources in its standard library, as well as through modules and frameworks developed by the community. Python is open-source, free to use, and compatible with nearly all operating systems.";
            } else {
                innerLanguageDescriptions[3].innerText = "Python, uma linguagem de programação de alto nível, é aplicada em diversos contextos, incluindo desktop, web, servidores e ciência de dados. Concebida por Guido Van Rossum na década de 90, visa aprimorar a experiência do desenvolvedor, simplificando a criação de código claro, direto e legível.\n\nA linguagem incorpora características como tipagem dinâmica e robusta, programação orientada a objetos, multiparadigmas, além de dispor de recursos poderosos em biblioteca padrão e por meio de módulos e frameworks desenvolvidos pela comunidade. Python é de código aberto, gratuito e compatível com quase todos os sistemas operacionais.";
            }
        } else if (element.id === "fastapi") {
            innerLanguageDescriptions[4].style.display = "block";
            innerLanguageDescriptions[4].style.visibility = "visible"
            innerLanguageDescriptions[4].style["boxShadow"] = "0 4px 6px -6px gray";

            if (languageSwitch.checked) {
                innerLanguageDescriptions[4].innerText = "FastAPI is a Python framework focused on API development, with its main characteristics being modern, fast, and simple. It is a relatively new framework, with its first version released on November 15, 2018. However, don't be deceived: despite its novelty, it is not inferior to other frameworks in the market.\n\nAmong its extensive list of features, one that stands out is its automatic documentation. By default, it provides two options: Swagger UI (for interactive navigation, calling, and testing of your API directly from the browser) and an alternative, navigable API documentation with the ReDoc library.";
            } else {
                innerLanguageDescriptions[4].innerText = "O FastAPI é um framework Python focado no desenvolvimento de APIs, tendo como principais características ser moderno, rápido e simples. É um framework relativamente novo, e sua primeira versão lançada no dia 15 de Novembro de 2018. Contudo não se engane: apesar de novo, ele não é inferior aos outros frameworks do mercado.\n\nDentre sua grande lista de funcionalidades, uma das que mais se destacam é  sua documentação automática, uma vez que por padrão ele disponibiliza duas opções, sendo elas Swagger UI (para navegar de forma interativa, chamar e testar sua API diretamente do navegador); e documentação navegável e alternativa da API com a biblioteca ReDoc.";
            }
        } else if (element.id === "flask") {
            innerLanguageDescriptions[5].style.display = "block";
            innerLanguageDescriptions[5].style.visibility = "visible"
            innerLanguageDescriptions[5].style["boxShadow"] = "0 4px 6px -6px gray";

            if (languageSwitch.checked) {
                innerLanguageDescriptions[5].innerText = "Flask is a web development framework in Python known for its simplicity and flexibility. With it, you can quickly and efficiently create websites, web applications, and APIs. Its \"one drop at a time\" approach allows you to add functionalities gradually, starting with the simplest form of a website and then incrementally incorporating features.\n\nIt is labeled as a micro web development framework, but that doesn't mean it can't build complete solutions. This designation is precisely because it starts with simplicity and advances in complexity as functionalities are added. Due to this characteristic, it becomes lighter, easier to use, and more flexible, allowing for better control over applications.";
            } else {
                innerLanguageDescriptions[5].innerText = "O Flask é um framework de desenvolvimento web no Python conhecido por sua simplicidade e flexibilidade. Com ele, é possível criar sites, aplicativos web e APIs de forma rápida e eficiente. Sua abordagem “one drop at a time” permite adicionar funcionalidades gradualmente, tendo como ideia que você comece um site da forma mais simples possível e depois vá adicionando funcionalidades.\n\nEle é conhecido como um micro framework de desenvolvimento web, mas isso não significa que ele não desenvolva soluções completas. Essa nominação se dá justamente por ele começar simples e ir ficando mais complexo à medida que se acrescentam funcionalidades. Por essa característica, ele se torna mais leve, mais fácil de usar e mais flexível porque você pode conduzir melhor as aplicações.";
            }
        } else if (element.id === "django") {
            innerLanguageDescriptions[6].style.display = "block";
            innerLanguageDescriptions[6].style.visibility = "visible"
            innerLanguageDescriptions[6].style["boxShadow"] = "0 4px 6px -6px gray";

            if (languageSwitch.checked) {
                innerLanguageDescriptions[6].innerText = "Django is a Python web framework widely recognized for its efficiency and ease of use in developing robust and scalable web applications. Its modularity and extensibility offer a wide range of ready-to-use functionalities, such as user authentication, data administration, and ORM (Object-Relational Mapping), simplifying the process of web development and maintenance.\n\nWith a pragmatic approach and a philosophy of \"batteries-included\", Django provides a complete and cohesive web development experience, making it a popular choice among developers. Its strong community and extensive documentation ensure ongoing support, enabling developers to innovate and deliver value to end-users efficiently.";
            } else {
                innerLanguageDescriptions[6].innerText = "Django é um framework web em Python amplamente reconhecido pela sua eficiência e facilidade de uso no desenvolvimento de aplicações web robustas e escaláveis. Sua modularidade e extensibilidade oferecem uma ampla gama de funcionalidades prontas para uso, como autenticação de usuários, administração de dados e ORM (Object-Relational Mapping), simplificando o processo de desenvolvimento e manutenção de aplicações web.\n\nCom uma abordagem pragmática e uma filosofia de \"batteries-included\", Django fornece uma experiência de desenvolvimento web completa e coerente, tornando-o uma escolha popular entre os desenvolvedores. Sua forte comunidade e vasta documentação garantem suporte contínuo, permitindo que os desenvolvedores inovem e entreguem valor aos usuários finais de forma eficiente.";
            }
        } else if (element.id === "javascript") {
            innerLanguageDescriptions[7].style.display = "block";
            innerLanguageDescriptions[7].style.visibility = "visible"
            innerLanguageDescriptions[7].style["boxShadow"] = "0 4px 6px -6px gray";

            if (languageSwitch.checked) {
                innerLanguageDescriptions[7].innerText = "JavaScript, also known as JS, is a high-level interpreted programming language that enjoys widespread popularity. Its prevalence is primarily due to being the default language interpreted by browsers, forming, along with HTML (Hypertext Markup Language) and CSS (Cascading Style Sheets), the fundamental foundation of the Web.\n\nIn addition to its essential role in browsers, JavaScript finds application in various non-browser environments such as node.js, Apache CouchDB, and Adobe Acrobat, and can be utilized across all layers of development, whether it be front-end, back-end, or full stack.";
            } else {
                innerLanguageDescriptions[7].innerText = "JavaScript, conhecido carinhosamente como JS, é uma linguagem de programação interpretada de alto nível , desfrutando de uma ampla popularidade. Sua predominância deve-se, principalmente, ao fato de ser a linguagem padrão interpretada pelos navegadores, formando, juntamente com o HTML (HiperText Markup Language) e CSS (Cascading Style Sheets), a base fundamental da Web.\n\nAlém de ser essencial para navegadores, o JavaScript encontra aplicação em diversos ambientes sem navegador, como node.js, Apache CouchDB e Adobe Acrobat, podendo ser utilizada em todas as camadas de desenvolvimento, seja front-end, back-end ou full stack.";
            }
        } else if (element.id === "csharp") {
            innerLanguageDescriptions[8].style.display = "block";
            innerLanguageDescriptions[8].style.visibility = "visible"
            innerLanguageDescriptions[8].style["boxShadow"] = "0 4px 6px -6px gray";

            if (languageSwitch.checked) {
                innerLanguageDescriptions[8].innerText = "C# (pronounced as \"C Sharp\") is a modern, object-oriented, and strongly typed programming language that empowers developers to create applications on the .NET platform. With roots in the C language family, C# is immediately recognizable to proficient programmers in C, C++, Java, and JavaScript.\n\nProfessionals in desktop application development and/or web solutions find numerous advantages in adopting this technology. Moreover, it is widely used in the mobile landscape, creating flexible applications for various devices and platforms. It is also increasingly employed in game development, utilized with the Unity platform, providing a simplified creation experience.";
            } else {
                innerLanguageDescriptions[8].innerText = "O C# (pronunciado como \"C Sharp\") é uma linguagem de programação moderna, orientada a objetos e de tipagem forte, capacitando os desenvolvedores a criar aplicativos na plataforma .NET. Com raízes na família de linguagens C, o C# é imediatamente reconhecido por programadores proeficientes em C, C++, Java e JavaScript.\n\nProfissionais do desenvolvimento de aplicações desktop e/ou soluções web encontram inúmeras vantagens ao adotar essa tecnologia. Além disso, ela é amplamente utilizada no cenário mobile, criando aplicações flexíveis para diversos dispositivos e plataformas. Vem também sendo usada no desenvolvimento de jogos e empregada com a plataforma Unity, proporcionando uma experiência de criação simplificada.";
            }
        } else if (element.id === "sql") {
            innerLanguageDescriptions[9].style.display = "block";
            innerLanguageDescriptions[9].style.visibility = "visible"
            innerLanguageDescriptions[9].style["boxShadow"] = "0 4px 6px -6px gray";

            if (languageSwitch.checked) {
                innerLanguageDescriptions[9].innerText = "SQL, short for Structured Query Language, was created in the mid-1970s. The main motivation for  its creation was the complexity of data management systems. It is a standard language for working with relational databases, widely used by professionals in various fields, from data scientists to Excel users.\n\nThe SQL language is relatively similar among the main Database Management Systems (DBMS) in the market, such as Oracle, MySQL, MariaDB, PostgreSQL, Microsoft SQL Server, among others.";
            } else {
                innerLanguageDescriptions[9].innerText = "O SQL, abreviação de Structured Query Language, teve sua origem na metade da década de 1970, motivado principalmente pela complexidade dos sistemas de gerenciamento de dados. Trata-se de uma linguagem padrão para interação com bancos de dados relacionais, sendo amplamente adotada por profissionais de diversas áreas, desde cientistas de dados até usuários do Excel.\n\nA linguagem SQL apresenta uma notável semelhança entre os principais Sistemas Gerenciadores de Banco de Dados (SGBDs) disponíveis no mercado, incluindo Oracle, MySQL, MariaDB, PostgreSQL, Microsoft SQL Server, entre outros.";
            }
        }
    }
}

function changeHRef() {
    if (window.innerWidth >= 800) {
        for (let i = 0; i < languageAnchors.length; i++) {
            languageAnchors[i].href = "#languages-container"
        }
    } else {
        languageAnchors[0].href = "#html5-anchor"
        languageAnchors[1].href = "#css3-anchor"
        languageAnchors[2].href = "#bootstrap-anchor"
        languageAnchors[3].href = "#python-anchor"
        languageAnchors[4].href = "#fastapi-anchor"
        languageAnchors[5].href = "#flask-anchor"
        languageAnchors[6].href = "#django-anchor"
        languageAnchors[7].href = "#javascript-anchor"
        languageAnchors[8].href = "#csharp-anchor"
        languageAnchors[9].href = "#sql-anchor"
    }
}

function setHeight() {
    if (window.innerWidth >= 800) {
        let maxValue = -1;

        for (let i = 0; i < projects.length; i++) {
            if (projects[i].offsetHeight > maxValue) {
                maxValue = projects[i].offsetHeight;
            }
        }

        for (let i = 0; i < projects.length; i++) {
            projects[i].style.height = maxValue.toString() + "px";
        }
    }
}

function showSidebar() {
    if (clickCounter === 0) {
        sidebarContainer.style.display = "flex";
        sidebarContainer.style.visibility = "visible";
        clickCounter = 1;
    } else if (clickCounter === 1) {
        sidebarContainer.style.display = "none";
        sidebarContainer.style.visibility = "hidden";
        clickCounter = 0;
    }
}

function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(function () {
        var alertBox = document.createElement('div');
        alertBox.classList.add('alert');

        if (languageSwitch.checked) {
            alertBox.textContent = "Text copied!";
        } else {
            alertBox.textContent = "Texto copiado!";
        }

        document.body.appendChild(alertBox);

        alertBox.classList.add('show');
        alertBox.style.position = 'fixed';
        alertBox.style.left = '50%';
        alertBox.style.transform = 'translateX(-50%)';
        alertBox.style.bottom = '20px';

        if (window.innerWidth >= 800) {
            alertBox.style.width = '400px';
        } else {
            alertBox.style.width = '250px';
        }

        alertBox.style.textAlign = 'center';
        alertBox.style.borderTopRightRadius = '50px';
        alertBox.style.borderBottomRightRadius = '50px';
        alertBox.style.borderBottomLeftRadius = '50px';
        alertBox.style.borderTopLeftRadius = '50px';

        setTimeout(function () {
            alertBox.classList.remove('show');
            setTimeout(function () {
                alertBox.remove();
            }, 500);
        }, 2000);
    });
}

function rotateContent(direction) {
    const centerElement = document.getElementById('center-certification');
    const leftElement = document.getElementById('left-certification');
    const rightElement = document.getElementById('right-certification');
    const certifications = document.getElementsByClassName('certification');
    const circleIndicators = document.getElementsByClassName('circle-indicator');

    if (direction === "initial") {
        step = 0;

    } else if (direction === 'right') {
        step = 1;

        leftElement.style.transition = 'none';
        centerElement.style.transition = 'none';
        rightElement.style.transition = 'none';

        setTimeout(() => {
            leftElement.style.transition = 'transform 0.5s ease';
            centerElement.style.transition = 'transform 0.5s ease';
            rightElement.style.transition = 'transform 0.5s ease';
        }, 50);

    } else if (direction === 'left') {
        step = -1;

        leftElement.style.transition = 'none';
        centerElement.style.transition = 'none';
        rightElement.style.transition = 'none';

        setTimeout(() => {
            leftElement.style.transition = 'transform 0.5s ease';
            centerElement.style.transition = 'transform 0.5s ease';
            rightElement.style.transition = 'transform 0.5s ease';
        }, 50);
    }

    for (let i = 0; i < certifications.length; i++) {
        if (centerElement == certifications[i]) {
            index = i + step;
        }
    }

    if (index < 0) {
        index = certifications.length - 1;
        previous = certifications.length - 2;
        next = 0;
    } else if (index == 0) {
        previous = certifications.length - 1;
        next = 1;
    } else if (index == certifications.length - 1) {
        previous = certifications.length - 2;
        next = 0;
    } else if (index >= certifications.length - 1) {
        index = 0;
        previous = certifications.length - 1;
        next = 1;
    } else {
        previous = index - 1;
        next = index + 1;
    }

    document.getElementById('left-certification').id = "";
    document.getElementById('center-certification').id = "";
    document.getElementById('right-certification').id = "";

    certifications[previous].id = 'left-certification';
    certifications[index].id = 'center-certification';
    certifications[next].id = 'right-certification';

    for (let i = 0; i < certifications.length; i++) {
        if (i == index) {
            circleIndicators[i].innerHTML = `<path fill="${circleindicatorColor[0]}" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"/>`;
        } else {
            circleIndicators[i].innerHTML = `<path fill="${circleindicatorColor[1]}" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"/>`;
        }

        if (i != previous && i != index && i != next) {
            certifications[i].id = 'hidden-certification'
        }
    }
}

themeSwitch.addEventListener("click", changeTheme);
languageSwitch.addEventListener("click", changeLanguage);
btnLeft.addEventListener('click', function () {
    rotateContent('left');
});
btnRight.addEventListener('click', function () {
    rotateContent('right');
});