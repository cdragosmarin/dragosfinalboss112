document.addEventListener("DOMContentLoaded", function () {
    const quizData = [
        
        {
            question: "110. Peştii au:",
            choices: ["solzi epidermici", "inimă bicamerală", "membre perechi de tip pterigiu"],
            correctAnswers: ["inimă bicamerală", "membre perechi de tip pterigiu"]
        },
        {
            question: "111. Solzii ctenoizi conțin:",
            choices: ["strat de spongină și izopedină", "strat de guanină și izopedină", "strat de izopedină", "strat de spongină, guanină și izopedină"],
            correctAnswers: ["strat de izopedină"]
        },
        {
            question: "112. Corp nud au:",
            choices: ["pisica de mare (Dasyatis pastinaca) și somnul (Silurus glanis)", "somul (Silurus glanis) și mihalțul (Lota lota)", "mihalțul (Lota lota) și corosbina (Parablennius sanguinolentus)"],
            correctAnswers: ["pisica de mare (Dasyatis pastinaca) și somnul (Silurus glanis)"]
        },
        {
            question: "113. Ventrale jugulare se întâlnesc la:",
            choices: ["corosbina (Parablenius sanguinolentus)", "calcan (Scophthalmus maximus)", "dracul de mare (Trachinus draco)", "pălămida (Sarda sarda)"],
            correctAnswers: ["corosbina (Parablenius sanguinolentus)", "calcan (Scophthalmus maximus)", "dracul de mare (Trachinus draco)"]
        },
        {
            question: "114. Branhiile de tip pectinat se găsesc la:",
            choices: ["limba de mare (Solea lascaris)", "vulpea de mare (Raja clavata)", "rândunica de mare (Chelidonichthys lucerna)"],
            correctAnswers: ["limba de mare (Solea lascaris)", "rândunica de mare (Chelidonichthys lucerna)"]
        },
        {
            question: "115. Respiră prin plămâni:",
            choices: ["dipnoii", "ciclostomii", "ciprinidele", "holostei"],
            correctAnswers: ["dipnoii"]
        },
        {
            question: "116. După locul de reproducere păstrăvul de munte (Salmo trutta fario) este specie:",
            choices: ["litofilă", "psamofilă", "fitofilă"],
            correctAnswers: ["psamofilă"]
        },
        {
            question: "117. La Gasterosteus aculeatus se practică:",
            choices: ["reținerea icrelor într-o pungă incubatoare", "ginogeneza", "construcția de cuiburi din plante acvatice"],
            correctAnswers: ["construcția de cuiburi din plante acvatice"]
        },
        {
            question: "118. Specie senestră este:",
            choices: ["limba de mare (Solea lascaris)", "calcanul (Scophthalmus maximus)", "cambula (Platichthys flesus)"],
            correctAnswers: ["calcanul (Scophthalmus maximus)"]
        },
        {
            question: "119. Peşti cartilaginoşi sunt:",
            choices: ["rândunica de mare, pisica de mare", "vulpea de mare, chimera", "viza, ştiuca osoasă"],
            correctAnswers: ["vulpea de mare, chimera"]
        },
        {
            question: "120. În Ord.Perciformes intră:",
            choices: ["stavrid (Trachurus mediterraneus)", "strunghil (Neogobius melanostomus)", "șprot (Sprattus sprattus)"],
            correctAnswers: ["stavrid (Trachurus mediterraneus)", "strunghil (Neogobius melanostomus)"]
        },
        {
            question: "121. Lipanul (Thymallus thymallus) corespunde ordinului:",
            choices: ["Gadiformes", "Clupeiformes", "Salmoniformes"],
            correctAnswers: ["Salmoniformes"]
        },
        {
            question: "122. Alegeți grupul de pești dulcicoli:",
            choices: ["sabița, zglăvoc, ghiborț", "cega, bacaliar, calcan", "lostrița, mihalț, avat"],
            correctAnswers: ["sabița, zglăvoc, ghiborț", "lostrița, mihalț, avat"]
        },
        {
            question: "123. Alegeți grupul de pești marini:",
            choices: ["hamsia, avat, rândunica de mare", "strunghil, cambula, stavrid", "barbun, zărgan, chimera"],
            correctAnswers: ["strunghil, cambula, stavrid", "barbun, zărgan, chimera"]
        },
        {
            question: "124. Specie anadromă este:",
            choices: ["cega", "păstruga", "somonul de Atlantic"],
            correctAnswers: ["păstruga", "somonul de Atlantic"]
        },
        {
            question: "125. Specie bentonică este:",
            choices: ["vulpea de mare", "șprot", "zărganul"],
            correctAnswers: ["vulpea de mare"]
        },
        {
            question: "126. Specie pelagică este:",
            choices: ["Scorpia de mare", "tonul", "țiparul"],
            correctAnswers: ["tonul"]
        },
        {
            question: "127. Dinţii lipsesc la:",
            choices: ["Acipenser stellatus", "Barbus barbus", "Hucho hucho"],
            correctAnswers: ["Acipenser stellatus", "Barbus barbus"]
        },
        {
            question: "128. Elementele chiridiului în ordine sunt:",
            choices: ["zeugopod, stilopod, autopod", "stilopod, zeugopod, autopod", "stilopod, autopod, zeugopod"],
            correctAnswers: ["stilopod, zeugopod, autopod"]
        },
        {
            question: "129. Amfibienii:",
            choices: ["sunt legaţi de mediul acvatic", "au respiraţie exclusiv pulmonară", "au cutie toracică"],
            correctAnswers: ["sunt legaţi de mediul acvatic"]
        },
        {
            question: "130. La amfibieni:",
            choices: ["columela este întâlnită în urechea internă", "articulația cranio-cervicală se realizează prin 2 condili occipitali", "se întâlnește fenomenul de neotenie"],
            correctAnswers: ["articulația cranio-cervicală se realizează prin 2 condili occipitali", "se întâlnește fenomenul de neotenie"]
        },
        {
            question: "131. La anure:",
            choices: ["oasele zeugopodiului sunt contopite", "oasele zeugopodiului sunt libere", "fecundația este internă cu metamorfoză"],
            correctAnswers: ["oasele zeugopodiului sunt contopite"]
        }
    ];

    initQuiz(quizData);
});
