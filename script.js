const themeSwitch = document.getElementById("theme-switch");
const rootElement = document.documentElement;
const sidebarImage = document.getElementById("sidebar-icon");

const languageSwitch = document.getElementById("language-switch");
const navigationAnchors = document.getElementsByClassName("header-anchor")
const languagePlaceholder = document.getElementById("language-placeholder");
const themePlaceholder = document.getElementById("theme-placeholder");
const sectionTitles = document.getElementsByClassName("section-title");
const homeParagraph = document.getElementById("home-paragraph");
const aboutMeParagraphs = document.getElementsByClassName("about-me-paragraph");
const projectTitles = document.getElementsByClassName("project-title");
const projectParagraphs = document.getElementsByClassName("project-paragraph");
const checkProjectButtons = document.getElementsByClassName("check-button");
const repositoryButtons = document.getElementsByClassName("repository-button");
const projects = document.getElementsByClassName("project");
const innerLanguageDescriptions = document.getElementsByClassName("inner-language-description")

const descriptionContainer = document.getElementById("description-container");
const html5Tr = document.getElementById("html5");
const css3Tr = document.getElementById("css3");
const bootstrapTr = document.getElementById("bootstrap");
const reactTr = document.getElementById("react");
const pythonTr = document.getElementById("python");
const javascriptTr = document.getElementById("javascript");
const csharpTr = document.getElementById("csharp");
const javaTr = document.getElementById("java");
const sqlTr = document.getElementById("sql");
const descriptionTitle = document.getElementById("description-title");
const descriptionText = document.getElementById("description-text");
const socialsTitle = document.getElementById("socials-title");
const nameLabel = document.getElementById("name-label");
const emailLabel = document.getElementById("email-label");
const subjectLabel = document.getElementById("subject-label");
const messageLabel = document.getElementById("message-label");
const submitButton = document.getElementById("submit-button");
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
    }
}

function changeLanguage() {
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

        certificationContents[0].innerHTML = "<strong>Content: </strong>HTML5, CSS3 and JavaScript fundamentals";
        certificationContents[1].innerHTML = "<strong>Content: </strong>Python fundamentals";
        certificationContents[2].innerHTML = "<strong>Content: </strong>Data analysis fundamentals, Pandas, Seaborn and Matplotlib libraries";
        certificationContents[3].innerHTML = "<strong>Content: </strong>Machine learning fundamentals, TensorFlow and Scikit-Learn libraries";
        certificationContents[4].innerHTML = "<strong>Content: </strong>C# e .NET Framework fundamentals";
        certificationContents[5].innerHTML = "<strong>Content: </strong>JavaScript fundamentals and its data structures";

        certificationDates[0].innerHTML = "<strong>Date: </strong> 25/08/2021";
        certificationDates[1].innerHTML = "<strong>Date: </strong> 22/05/2023";
        certificationDates[2].innerHTML = "<strong>Date: </strong> 30/05/2023";
        certificationDates[3].innerHTML = "<strong>Date: </strong> 28/06/2023";
        certificationDates[4].innerHTML = "<strong>Date: </strong> 21/12/2023";
        certificationDates[5].innerHTML = "<strong>Date: </strong> 05/01/2024";

        certificationWorkloads[0].innerHTML = "<strong>Workload: </strong> 27 hours";
        certificationWorkloads[1].innerHTML = "<strong>Workload: </strong> 300 hours";
        certificationWorkloads[2].innerHTML = "<strong>Workload: </strong> 300 hours";
        certificationWorkloads[3].innerHTML = "<strong>Workload: </strong> 300 hours";
        certificationWorkloads[4].innerHTML = "<strong>Workload: </strong> 300 hours";
        certificationWorkloads[5].innerHTML = "<strong>Workload: </strong> 300 hours";

        projectTitles[0].innerText = "Data input for photovoltaic projects";
        projectTitles[1].innerText = "Market place";

        projectParagraphs[0].innerText = "Project developed during my time at the last company where I worked, due to the inefficiency found in filling out the spreadsheets and forms required for photovoltaic projects. Therefore, an automation of this process was developed, so that the user only needs to provide the necessary data for the project, and the respective forms would be filled out correctly.";
        projectParagraphs[1].innerText = "Project created for a marketplace where users can buy products listed by others and add their own products for sale.";

        for (let i = 0; i < checkProjectButtons.length; i++) {
            checkProjectButtons[i].innerText = "Check project"
        }

        for (let i = 0; i < repositoryButtons.length; i++) {
            repositoryButtons[i].innerText = "Repository"
        }

        nameLabel.innerText = "First and last names:";
        emailLabel.innerText = "Email address:"
        subjectLabel.innerText = "Subject:";
        messageLabel.innerText = "Message:";

        nameInput.placeholder = "Type your first and last names";
        emailInput.placeholder = "Type your email address";
        subjectInput.placeholder = "Type the subject";
        messageInput.placeholder = "Type your message";

        submitButton.value = "Send";


        socialsTitle.innerText = "Find me in other social networks:"
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

        certificationContents[0].innerHTML = "<strong>Conteúdo: </strong> Fundamentos de HTML5, CSS3 e JavaScript";
        certificationContents[1].innerHTML = "<strong>Conteúdo: </strong> Fundamentos de Python";
        certificationContents[2].innerHTML = "<strong>Conteúdo: </strong> Fundamentos de análise de dados, bibliotecas Pandas, Seaborn e Matplotlib";
        certificationContents[3].innerHTML = "<strong>Conteúdo: </strong> Fundamentos de machine learning, bibliotecas TensorFlow e Scikit-Learn";
        certificationContents[4].innerHTML = "<strong>Conteúdo: </strong> Fundamentos de C# e .NET Framework";
        certificationContents[5].innerHTML = "<strong>Conteúdo: </strong> Fundamentos de JavaScript e suas estruturas de dados";

        certificationDates[0].innerHTML = "<strong>Data: </strong> 25/08/2021";
        certificationDates[1].innerHTML = "<strong>Data: </strong> 22/05/2023";
        certificationDates[2].innerHTML = "<strong>Data: </strong> 30/05/2023";
        certificationDates[3].innerHTML = "<strong>Data: </strong> 28/06/2023";
        certificationDates[4].innerHTML = "<strong>Data: </strong> 21/12/2023";
        certificationDates[5].innerHTML = "<strong>Data: </strong> 05/01/2024";

        certificationWorkloads[0].innerHTML = "<strong>Carga horária: </strong> 27 horas";
        certificationWorkloads[1].innerHTML = "<strong>Carga horária: </strong> 300 horas";
        certificationWorkloads[2].innerHTML = "<strong>Carga horária: </strong> 300 horas";
        certificationWorkloads[3].innerHTML = "<strong>Carga horária: </strong> 300 horas";
        certificationWorkloads[4].innerHTML = "<strong>Carga horária: </strong> 300 horas";
        certificationWorkloads[5].innerHTML = "<strong>Carga horária: </strong> 300 horas";

        projectTitles[0].innerText = "Entrada de dados para projetos fotovoltaicos";
        projectTitles[1].innerText = "Market place";

        projectParagraphs[0].innerText = "Projeto elaborado durante meu tempo na última empresa onde trabalhei, devido a ineficência encontrada no preenchimento das planilhas e formulários necessários aos projetos fotovoltaicos. Logo, uma automatização desse processo foi desenvolvida, de modo que o usuário necessita apenas fornecer os dados necessários para o projeto, e os devidos formulários seriam preenchidos corretamente.";
        projectParagraphs[1].innerText = "Projeto feito para um Market Place, onde usuários podem comprar produtos dispostos por outros e incluir seus próprios produtos para venda.";

        for (let i = 0; i < checkProjectButtons.length; i++) {
            checkProjectButtons[i].innerText = "Checar projeto"
        }

        for (let i = 0; i < repositoryButtons.length; i++) {
            repositoryButtons[i].innerText = "Repositório"
        }

        nameLabel.innerText = "Nome e sobrenome:";
        emailLabel.innerText = "Endereço de email:";
        subjectLabel.innerText = "Assunto:";
        messageLabel.innerText = "Mensagem:";

        nameInput.placeholder = "Digite seu nome e sobrenome";
        emailInput.placeholder = "Digite seu endereço de email";
        subjectInput.placeholder = "Digite o assunto";
        messageInput.placeholder = "Digite sua mensagem";

        submitButton.value = "Enviar";

        socialsTitle.innerText = "Me encontre em outras redes sociais:";
    }
}

function changeDescription() {
    var windowWidth = window.innerWidth;

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
        } else if (reactTr.matches(':hover')) {
            descriptionTitle.innerText = "React";

            if (languageSwitch.checked) {
                descriptionText.innerText = "React is a JavaScript framework created by Facebook (now Meta) used for building user interfaces (UI) in web applications. Its popularity stems from being user-friendly, highly flexible, and scalable, and it is utilized by numerous technology companies, including Facebook, Instagram, and Airbnb.\n\nIf you are a social media user, you've likely observed that certain parts of the screen exhibit special or independent behaviors. To address this, the Facebook development team devised a highly specific approach to handle displayed data and update these small sections of the application: React.";
            } else {
                descriptionText.innerText = "O React, desenvolvido pelo Facebook (atualmente Meta), representa um framework JavaScript empregado na criação de interfaces de usuário (UI) para aplicativos web. Sua popularidade advém da facilidade de uso, notável flexibilidade e escalabilidade, sendo adotado por diversas empresas de tecnologia, tais como Facebook, Instagram e Airbnb.\n\nSe você utiliza redes sociais, é provável que tenha notado comportamentos distintos em determinadas partes da tela. Para enfrentar esse desafio, a equipe de desenvolvedores do Facebook concebeu uma abordagem altamente especializada na manipulação de dados e na atualização dessas pequenas porções da aplicação: o React.";
            }
        } else if (pythonTr.matches(':hover')) {
            descriptionTitle.innerText = "Python";

            if (languageSwitch.checked) {
                descriptionText.innerText = "Python, a high-level programming language, is applied in various contexts, including desktop, web, servers, and data science. Conceived by Guido Van Rossum in the '90s, it aims to enhance the developer's experience by simplifying the creation of clear, straightforward, and readable code.\n\nThe language incorporates features such as dynamic and robust typing, object-oriented programming, multiparadigm support, and leverages powerful resources in its standard library, as well as through modules and frameworks developed by the community. Python is open-source, free to use, and compatible with nearly all operating systems.";
            } else {
                descriptionText.innerText = "Python, uma linguagem de programação de alto nível, é aplicada em diversos contextos, incluindo desktop, web, servidores e ciência de dados. Concebida por Guido Van Rossum na década de 90, visa aprimorar a experiência do desenvolvedor, simplificando a criação de código claro, direto e legível.\n\nA linguagem incorpora características como tipagem dinâmica e robusta, programação orientada a objetos, multiparadigmas, além de dispor de recursos poderosos em biblioteca padrão e por meio de módulos e frameworks desenvolvidos pela comunidade. Python é de código aberto, gratuito e compatível com quase todos os sistemas operacionais.";
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
        } else if (javaTr.matches(':hover')) {
            descriptionTitle.innerText = "Java";

            if (languageSwitch.checked) {
                descriptionText.innerText = "The Java programming platform was born in 1995 within the laboratories of Sun Microsystems as a result of extensive scientific and technological research. Java stands out as one of the most widely used platforms for application development worldwide.\n\nThe Java platform provides a comprehensive environment for the development and execution of programs, consisting of a high-level object-oriented programming language, a virtual machine (Java Virtual Machine or JVM), Java Runtime Environment (JRE), and Java Development Kit (JDK).";
            } else {
                descriptionText.innerText = "A plataforma de programação Java teve sua origem no ano de 1995, originando-se nos laboratórios da empresa Sun Microsystems como resultado de uma extensa pesquisa científica e tecnológica. Java destaca-se como uma das plataformas mais amplamente utilizadas para o desenvolvimento de aplicações em escala global.\n\nEssa plataforma oferece um ambiente abrangente para a criação e execução de programas, compreendendo uma linguagem de programação de alto nível orientada a objetos, uma máquina virtual (Java Virtual Machine ou JVM), o Java Runtime Environment (JRE) e o Java Development Kit (JDK).";
            }
        } else if (sqlTr.matches(':hover')) {
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
        } else if (element.id === "react") {
            innerLanguageDescriptions[3].style.display = "block";
            innerLanguageDescriptions[3].style.visibility = "visible"
            innerLanguageDescriptions[3].style["boxShadow"] = "0 4px 6px -6px gray";
            
            if (languageSwitch.checked) {
                innerLanguageDescriptions[3].innerText = "React is a JavaScript framework created by Facebook (now Meta) used for building user interfaces (UI) in web applications. Its popularity stems from being user-friendly, highly flexible, and scalable, and it is utilized by numerous technology companies, including Facebook, Instagram, and Airbnb.\n\nIf you are a social media user, you've likely observed that certain parts of the screen exhibit special or independent behaviors. To address this, the Facebook development team devised a highly specific approach to handle displayed data and update these small sections of the application: React.";
            } else {
                innerLanguageDescriptions[3].innerText = "O React, desenvolvido pelo Facebook (atualmente Meta), representa um framework JavaScript empregado na criação de interfaces de usuário (UI) para aplicativos web. Sua popularidade advém da facilidade de uso, notável flexibilidade e escalabilidade, sendo adotado por diversas empresas de tecnologia, tais como Facebook, Instagram e Airbnb.\n\nSe você utiliza redes sociais, é provável que tenha notado comportamentos distintos em determinadas partes da tela. Para enfrentar esse desafio, a equipe de desenvolvedores do Facebook concebeu uma abordagem altamente especializada na manipulação de dados e na atualização dessas pequenas porções da aplicação: o React.";
            }
        } else if (element.id === "python") {
            innerLanguageDescriptions[4].style.display = "block";
            innerLanguageDescriptions[4].style.visibility = "visible"
            innerLanguageDescriptions[4].style["boxShadow"] = "0 4px 6px -6px gray";
            
            if (languageSwitch.checked) {
                innerLanguageDescriptions[4].innerText = "Python, a high-level programming language, is applied in various contexts, including desktop, web, servers, and data science. Conceived by Guido Van Rossum in the '90s, it aims to enhance the developer's experience by simplifying the creation of clear, straightforward, and readable code.\n\nThe language incorporates features such as dynamic and robust typing, object-oriented programming, multiparadigm support, and leverages powerful resources in its standard library, as well as through modules and frameworks developed by the community. Python is open-source, free to use, and compatible with nearly all operating systems.";
            } else {
                innerLanguageDescriptions[4].innerText = "Python, uma linguagem de programação de alto nível, é aplicada em diversos contextos, incluindo desktop, web, servidores e ciência de dados. Concebida por Guido Van Rossum na década de 90, visa aprimorar a experiência do desenvolvedor, simplificando a criação de código claro, direto e legível.\n\nA linguagem incorpora características como tipagem dinâmica e robusta, programação orientada a objetos, multiparadigmas, além de dispor de recursos poderosos em biblioteca padrão e por meio de módulos e frameworks desenvolvidos pela comunidade. Python é de código aberto, gratuito e compatível com quase todos os sistemas operacionais.";
            }
        } else if (element.id === "javascript") {
            innerLanguageDescriptions[5].style.display = "block";
            innerLanguageDescriptions[5].style.visibility = "visible"
            innerLanguageDescriptions[5].style["boxShadow"] = "0 4px 6px -6px gray";
            
            if (languageSwitch.checked) {
                innerLanguageDescriptions[5].innerText = "JavaScript, also known as JS, is a high-level interpreted programming language that enjoys widespread popularity. Its prevalence is primarily due to being the default language interpreted by browsers, forming, along with HTML (Hypertext Markup Language) and CSS (Cascading Style Sheets), the fundamental foundation of the Web.\n\nIn addition to its essential role in browsers, JavaScript finds application in various non-browser environments such as node.js, Apache CouchDB, and Adobe Acrobat, and can be utilized across all layers of development, whether it be front-end, back-end, or full stack.";
            } else {
                innerLanguageDescriptions[5].innerText = "JavaScript, conhecido carinhosamente como JS, é uma linguagem de programação interpretada de alto nível , desfrutando de uma ampla popularidade. Sua predominância deve-se, principalmente, ao fato de ser a linguagem padrão interpretada pelos navegadores, formando, juntamente com o HTML (HiperText Markup Language) e CSS (Cascading Style Sheets), a base fundamental da Web.\n\nAlém de ser essencial para navegadores, o JavaScript encontra aplicação em diversos ambientes sem navegador, como node.js, Apache CouchDB e Adobe Acrobat, podendo ser utilizada em todas as camadas de desenvolvimento, seja front-end, back-end ou full stack.";
            }
        } else if (element.id === "csharp") {
            innerLanguageDescriptions[6].style.display = "block";
            innerLanguageDescriptions[6].style.visibility = "visible"
            innerLanguageDescriptions[6].style["boxShadow"] = "0 4px 6px -6px gray";
            
            if (languageSwitch.checked) {
                innerLanguageDescriptions[6].innerText = "C# (pronounced as \"C Sharp\") is a modern, object-oriented, and strongly typed programming language that empowers developers to create applications on the .NET platform. With roots in the C language family, C# is immediately recognizable to proficient programmers in C, C++, Java, and JavaScript.\n\nProfessionals in desktop application development and/or web solutions find numerous advantages in adopting this technology. Moreover, it is widely used in the mobile landscape, creating flexible applications for various devices and platforms. It is also increasingly employed in game development, utilized with the Unity platform, providing a simplified creation experience.";
            } else {
                innerLanguageDescriptions[6].innerText = "O C# (pronunciado como \"C Sharp\") é uma linguagem de programação moderna, orientada a objetos e de tipagem forte, capacitando os desenvolvedores a criar aplicativos na plataforma .NET. Com raízes na família de linguagens C, o C# é imediatamente reconhecido por programadores proeficientes em C, C++, Java e JavaScript.\n\nProfissionais do desenvolvimento de aplicações desktop e/ou soluções web encontram inúmeras vantagens ao adotar essa tecnologia. Além disso, ela é amplamente utilizada no cenário mobile, criando aplicações flexíveis para diversos dispositivos e plataformas. Vem também sendo usada no desenvolvimento de jogos e empregada com a plataforma Unity, proporcionando uma experiência de criação simplificada.";
            }
        } else if (element.id === "java") {
            innerLanguageDescriptions[7].style.display = "block";
            innerLanguageDescriptions[7].style.visibility = "visible"
            innerLanguageDescriptions[7].style["boxShadow"] = "0 4px 6px -6px gray";
            
            if (languageSwitch.checked) {
                innerLanguageDescriptions[7].innerText = "The Java programming platform was born in 1995 within the laboratories of Sun Microsystems as a result of extensive scientific and technological research. Java stands out as one of the most widely used platforms for application development worldwide.\n\nThe Java platform provides a comprehensive environment for the development and execution of programs, consisting of a high-level object-oriented programming language, a virtual machine (Java Virtual Machine or JVM), Java Runtime Environment (JRE), and Java Development Kit (JDK).";
            } else {
                innerLanguageDescriptions[7].innerText = "A plataforma de programação Java teve sua origem no ano de 1995, originando-se nos laboratórios da empresa Sun Microsystems como resultado de uma extensa pesquisa científica e tecnológica. Java destaca-se como uma das plataformas mais amplamente utilizadas para o desenvolvimento de aplicações em escala global.\n\nEssa plataforma oferece um ambiente abrangente para a criação e execução de programas, compreendendo uma linguagem de programação de alto nível orientada a objetos, uma máquina virtual (Java Virtual Machine ou JVM), o Java Runtime Environment (JRE) e o Java Development Kit (JDK).";
            }
        } else if (element.id === "sql") {
            innerLanguageDescriptions[8].style.display = "block";
            innerLanguageDescriptions[8].style.visibility = "visible"
            innerLanguageDescriptions[8].style["boxShadow"] = "0 4px 6px -6px gray";
            
            if (languageSwitch.checked) {
                innerLanguageDescriptions[8].innerText = "SQL, short for Structured Query Language, was created in the mid-1970s. The main motivation for  its creation was the complexity of data management systems. It is a standard language for working with relational databases, widely used by professionals in various fields, from data scientists to Excel users.\n\nThe SQL language is relatively similar among the main Database Management Systems (DBMS) in the market, such as Oracle, MySQL, MariaDB, PostgreSQL, Microsoft SQL Server, among others.";
            } else {
                innerLanguageDescriptions[8].innerText = "O SQL, abreviação de Structured Query Language, teve sua origem na metade da década de 1970, motivado principalmente pela complexidade dos sistemas de gerenciamento de dados. Trata-se de uma linguagem padrão para interação com bancos de dados relacionais, sendo amplamente adotada por profissionais de diversas áreas, desde cientistas de dados até usuários do Excel.\n\nA linguagem SQL apresenta uma notável semelhança entre os principais Sistemas Gerenciadores de Banco de Dados (SGBDs) disponíveis no mercado, incluindo Oracle, MySQL, MariaDB, PostgreSQL, Microsoft SQL Server, entre outros.";
            }
        }
    }
}

function setHeight() {
    let maxValue = -1;

    for (let i = 0; i < projects.length; i++) {
        if (projects[i].offsetHeight > maxValue) {
            maxValue = projects[i].offsetHeight;
        }
    }
    console.log(maxValue)
    for (let i = 0; i < projects.length; i++) {
        projects[i].style.height = maxValue.toString() + "px";
    }
}

function showSidebar() {
    console.log(clickCounter)
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

function validateForm() {

    var error = "";

    if (nameInput.value == "") {
        error += "Please enter your name.\n";
    }

    if (emailInput.value == "") {
        error += "Please enter your email address.\n";
    } else if (!validateEmail(emailInput.value)) {
        error += "Please enter a valid email address.\n";
    }

    if (subjectInput.value == "") {
        error += "Please enter a subject.\n";
    }

    if (messageInput.value == "") {
        error += "Please enter a message.\n";
    }

    if (error != "") {
        alert(error);
        return false;
    }
}

function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

themeSwitch.addEventListener("click", changeTheme);
languageSwitch.addEventListener("click", changeLanguage);