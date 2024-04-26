import React from 'react';
import './InfoCard.css'; // Make sure to import the CSS file
function InfoCard() {
  return (
    <div className="info-card">
      <h2> ⚠️ Information ⚠️</h2>
      <p>
        <strong>Taux (Taux Horaire): </strong>
        Veuillez saisir le taux horaire qui figure dans
        le fichier de vos bulletins de paie.
        Si le taux a varié au cours des différents mois travaillés,
        faites une moyenne de ces taux pour obtenir le taux horaire moyen à utiliser
        pour calculer les heures de nuits non majorés.
      </p>
      <p>
        <strong>Indemnité (Panier Repas): </strong>
        Saisissez l'indemnité de panier repas
        correspondante à la convention collective applicable
      </p>
      <p>
        <strong>Fichier csv : </strong>
        Chargez le fichier CSV contenant vos
        données personnelles fournies par votre employeur.
        Assurez-vous que le fichier inclut bien les colonnes
        'start date time' et 'end date_time'(peut import le format)
        pour chaque période travaillée.

    </p>
      <p>
        <strong>Fichier text: </strong>
        Veuillez vous assurer que votre fichier
        texte est formaté correctement avec
        les colonnes 'date' 'start time'  'end time',
        sous le format suivant  : AAAA-MM-JJ | HH:MM:SS | HH:MM:SS
        Chaque entrée doit précisément respecter
        ce modèle pour garantir un traitement correct des données.
    </p>
    </div>
  );
}

export default InfoCard;
