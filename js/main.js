/* ######################### UI: HEADER, FOOTER ####################################  */
var appendHeader = function() {
$('header')
  .append(
'    <a href="index.html">'
+'        <div id="banner">'
+'            <table id="titre_logo">'
+'                <tr>'
+'                    <td id="logo"></td>'
+'                    <td id="cell_titre" >'
+'                        <h1 id="titre" class="fr"><span class="acro">s</span>éminaire <span class="acro">d</span>octoral <span class="acro">i</span>nternational<br />sur la <span class="acro">d</span>idactique des <span class="acro">l</span>angues et des <span class="acro">c</span>ultures.</h1>'
+'                        <br />'
+'                        <span id="sous_titre" class="fr">11, 12, 13 & 14 Juin 2014 <br /><span class="acro">I</span>nstitut <span class="acro">Na</span>tional des <span class="acro">L</span>angues et  <span class="acro">C</span>ivilisations <span class="acro">O</span>rientales, Paris, France</span>'
+'                        <h1 class="en" id="titre"><span class="acro">i</span>nternational seminar for <span class="acro">y</span>oung researchers<br> on <span class="acro">l</span>anguages and <span class="acro">c</span>ultures’<span class="acro">e</span>ducation</h1>'
+'                        <br />'
+'                        <span id="sous_titre" class="en">June 11, 12, 13 & 14, 2014 <br /><span class="acro">I</span>nstitut <span class="acro">Na</span>tional des <span class="acro">L</span>angues et  <span class="acro">C</span>ivilisations <span class="acro">O</span>rientales, Paris, France</span>'
+'                    </td>'
+'                </tr>'
+'            </table>'
+'        </div>'
+'    </a>'
+'    <nav>'
+'        <ul class="menu fr">'
+'           <img src="../img/fr.png" class="lang" />'
+'           <li><a href="index.html">Accueil</a></li><li><a href="call.html">Appel & application</a></li><li><a href="expert.html">Comités</a></li><li><a href="program.html">Programme</a></li><li><a href="abstracts.html">Résumés</a></li><li><a href="registration.html">Inscriptions</a></li><!-- <li><a href="infos.html">Informations</a></li><li><a href="publication.html">Publication</a></li> -->'
+'        </ul>'
+'        <ul class="menu en">'
+'           <img src="../img/en.png" class="lang" />'
+'           <li><a href="index.html">Home</a></li><li><a href="call.html">Call & submission</a></li><li><a href="expert.html">Committees</a></li><li><a href="program.html">Program</a></li><li><a href="abstracts.html">Abstracts</a></li><li><a href="registration.html">Registration</a></li><!-- <li><a href="infos.html">Practical</a></li><li><a href="publication.html">Publication</a></li> -->'
+'        </ul>'
+'    </nav>'
+'<a href="https://github.com/hugolpz/2014Seminar"><img style="position: absolute; top: 0; right: 0; border: 0;" src="https://s3.amazonaws.com/github/ribbons/forkme_right_gray_6d6d6d.png" alt="Fork me on GitHub"></a>'
)}

var appendDates = function() {
$('#dates')
  .append(
'        <h2>Calendar</h2>'
+'        <article class="cadre">'
+'            <p class="left"><span class="gras">Submission deadline</span>'
+'            </p>5th Jan., 2014 -- closed.'
+'            <p class="left"><span class="gras">Opened to</span>'
+'            </p>All candidates from partners teams'
+'            <p class="left"><span class="gras">Preliminary program</span>'
+'            </p>May 2014'
+'            <p class="left"><span class="gras">Full presentation deadline</span>'
+'            </p>15th May, 2014</article>'
)}



var appendFooter = function() {
$('footer')
  .append(
'    Sponsored by :<br /><br />'
+'    <div class="partnairs" id="anchorPartnairsMajor"></div>'
+'    <br />'
+'    <span id="credits"> '
+'    <a class="lang2 en"><img src="../img/fr.png" alt="Version française" title="Version française" id="flag"/> Version française</a>'
+'    <a class="lang2 fr"><img src="../img/en.png" alt="English version" title="English version" id="flag"/> English version</a>  '
+'        | <a href="mailto:hugo.lpz+PLIDAM2014@gmail.com">@webmaster</a> | Website: Emilie Charles & Hugo Lopez, CC-BY-SA</span>'
);
}

// http://jsfiddle.net/S2836/4/
var switchLanguage = function() { 
    $(".lang, .lang2").on('click', function () { 
       $( ".en, .fr" ).toggle();
       if (localStorage.PLIDAM =='en') { localStorage.PLIDAM = "fr"; }
       else { localStorage.PLIDAM = "en"; }
 //      alert ("1"+localStorage.PLIDAM );
    });
    if(localStorage.PLIDAM =='en') { 
        $( ".fr , .en" ).toggle();
 //       alert ("2"+localStorage.PLIDAM ); 
    }else{}
};

//JS templating -- handlebars.js
var slingshot = function (url, tplId, anchor) {
    $.getJSON(url, function(data) {
        var template = tpl; //$(tplId).html();
        var stone = Handlebars.compile(template)(data);
        $(anchor).append(stone);
    });
}
var tpl = '{{#items}}<a href="http://{{website}}">'
+'          <img class="partenaire" title="{{name}} alt="{{name}}" ({{country}})" src="../img/partnairs/{{img}}_logo.jpg" href="http://{{website}}" />'
+'        </a>{{/items}}';

slingshot('../data/partnairs_major.json', tpl, '#anchorPartnairsMajor');

var currentPage = function () { $('.menu a').each(function() {
    if ($(this).attr('href') == location.href.split("/").slice(-1)){ $(this).addClass('courant') }
  });}