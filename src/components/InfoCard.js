import React, {useState} from 'react';
import './InfoCard.css'; // Make sure to import the CSS file
function InfoCard() {
  const [currentPage, setCurrentPage] = useState(0);
  const [elements ] = useState([
  {
      title: 'Taux (Taux Horaire)',
      content: (
        <div className="explanation">
          <p>
                Veuillez saisir le taux horaire qui figure dans
                le fichier de vos bulletins de paie.
                Si le taux a varié au cours des différents mois travaillés,
                faites une moyenne de ces taux pour obtenir le taux horaire moyen à utiliser
                pour calculer les heures de nuits non majorés.
          </p>
        </div>
      )
    },
    {
      title: 'Indemnité (Panier Repas)',
      content: (
        <div className="explanation">
          <p>
            Saisissez l'indemnité de panier repas
            correspondante à la convention collective applicable.
          </p>
        </div>
      )
    },
    {
      title: 'Fichier csv  :',
      content: (
        <div className="explanation">
          <p>
                Chargez le fichier CSV contenant vos
                données personnelles fournies par votre employeur.
                Assurez-vous que le fichier inclut bien les colonnes
                'start date time' et 'end date_time'(peut import le format)
                pour chaque période travaillée.
          </p>
        </div>
      )
    },
    {
      title: 'Fichier text :',
      content: (
        <div className="explanation">
          <p>
                Veuillez vous assurer que votre fichier
                texte est formaté correctement avec
                les colonnes 'date' 'start time'  'end time',
                sous le format suivant  : AAAA-MM-JJ | HH:MM:SS | HH:MM:SS
                Chaque entrée doit précisément respecter
                ce modèle pour garantir un traitement correct des données.
          </p>
        </div>
      )
    }
  ]);

  const nextPage = () => {
    if (currentPage < elements.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };
  return (
    <div id="info-card section">
      <div className='section info-card'>
        <div className='card-column'>
          {elements.map((element, index) => (
            <div key={index} className={`card${currentPage === index ? ' active' : ''}`} onClick={() => setCurrentPage(index)}>
              <h3>{element.title}</h3>
            </div>
          ))}
        </div>
        <div className="content-box">
          <h2> ⚠️ Information ⚠️</h2>
          {elements[currentPage].content}
            <div className="page-navigation">
              <button onClick={prevPage} disabled={currentPage === 0}>Previous</button>
              <button onClick={nextPage} disabled={currentPage === elements.length - 1}>Next</button>
            </div>
        </div>
        {/* <div className='card-2'>
          <h3 onClick={() => toggleExplanation('indemnite')}> Indemnité (Panier Repas) : </h3>
          {explanations.indemnite && (
            <div className='explanation'>
              <p>
                Saisissez l'indemnité de panier repas
                correspondante à la convention collective applicable
              </p>
              <button>Next Step</button> 
            </div>
          )}
        </div>
        <div className='card-2'>
          <h3 onClick={() => toggleExplanation('fichierText')}> Fichier csv  : </h3>
          {explanations.fichierText && (
            <div className='explanation'>
              <p>
                Chargez le fichier CSV contenant vos
                données personnelles fournies par votre employeur.
                Assurez-vous que le fichier inclut bien les colonnes
                'start date time' et 'end date_time'(peut import le format)
                pour chaque période travaillée.
              </p>
              <button>Next Step</button> 
            </div>
          )}
        </div>
        <div className='card-2'>
        <h3 onClick={() => toggleExplanation('fichierText')}> Fichier text:  </h3>
          {explanations.fichierText && (
            <div className='explanation'>
              <p>
                Veuillez vous assurer que votre fichier
                texte est formaté correctement avec
                les colonnes 'date' 'start time'  'end time',
                sous le format suivant  : AAAA-MM-JJ | HH:MM:SS | HH:MM:SS
                Chaque entrée doit précisément respecter
                ce modèle pour garantir un traitement correct des données.
              </p>
              <button>Next Step</button> 
            </div>
          )}
        </div> */}
      </div>
    </div>
  );
}

export default InfoCard;
