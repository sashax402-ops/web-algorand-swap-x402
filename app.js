"use strict";
const TEXT = {"en":{"api":"API for agents ↗","connect":"Connect wallet","disconnect":"Disconnect","title":"NEWS INTELLIGENCE","intro":"Today's news for each asset, ranked by relevance. With sources, dates and an explanation of the selection.","one":"ONE REPORT · ONE ASSET","once":"One payment. No subscription.","checking":"Checking availability…","asset":"ASSET","buy":"Buy report","pending":"A payment is already being processed.","report":"ASSET REPORT","received":"Received","unique":"Relevant and unique","duplicates":"Duplicates grouped","sources":"Available providers","selected":"01 / SELECTED NEWS","why":"Why this story","criteria":"Scores combine asset relevance (35), recency (25), predefined source priority (15), event (15) and coverage (10). Ties use the newest publication, then URL. Source weights are not fact checks.","providerStatus":"Source availability","ranked":"News ranked by relevance","today":"Today · UTC","editorial":"Per-story BUY/SELL/HOLD signals interpret the available headline and excerpt using rules. They do not predict returns and are not personalized investment recommendations.","originalLanguage":"Headlines and excerpts keep the source's original language. Interface and selection explanations follow your chosen language.","partial":"Partial coverage: one or more providers could not be queried.","export":"Download report (JSON) ↓","noExtra":"Save your purchased report at no additional charge.","start":"Choose an asset to begin","startText":"Select a coin to see recent news and check today’s report before paying.","noNews":"If no relevant news is available today (UTC), payment is not settled.","choose":"Choose your asset","catalog":"Bitcoin, Ethereum, Algorand and 46 other assets.","authorize":"Authorize the payment","paymentText":"Pay {price} USDC on Algorand through x402.","context":"Receive context","contextText":"The selected story, alternatives and original sources.","footer":"Trading News · News ranked by relevance.","confirmTitle":"Confirm your report","reportLabel":"Report","networkFee":"Your network fee","network":"Network","ledger":"Using a hardware wallet? Unlock it and open the Algorand app. Your account must have USDC opted in.","authorizeWallet":"Authorize in my wallet","creating":"Creating report…","preflight":"Checking today’s news…","signing":"Approve in your wallet…","confirming":"Confirming payment and preparing report…","waiting":"Keep this page open.","ready":"Algorand Mainnet · x402","disabled":"Purchases are not enabled","sponsored":"0 ALGO · sponsored","recipient":"Recipient","paid":"Payment confirmed","replayed":"Recovered without another payment","receipt":"View receipt ↗","generated":"Report generated","rules":"EXPLAINABLE RULES","ai":"AI + RULES","read":"Read original source ↗","score":"priority / 100","rMatch":"Asset relevance","rAge":"Age (hours)","rEvent":"Event","rCoverage":"Domains with similar headlines","rIndependence":"Coverage does not prove independent verification.","speculative":"Speculative headline: reduced priority.","aiEvidence":"Evidence used by the selector","available":"Available","notConfigured":"Not configured","unavailable":"Unavailable","networkError":"Could not connect to the service. Please try again.","sourcesError":"The sources are unavailable. Please try again.","walletError":"The wallet did not complete the request. Check the connection, USDC balance and opt-in, then try again.","paymentError":"Payment status is being checked automatically. Please keep this page open.","configError":"The service configuration could not be verified. Purchases are unavailable.","storageError":"Enable browser storage before making a purchase so an interrupted payment can be recovered.","expired":"The quote expired. Prepare the purchase again before signing.","security":"Security","regulation":"Regulation","protocol":"Protocol","adoption":"Adoption","macro":"Macroeconomics","market":"Market","walletWarning":"Payment requires USDC on {network}, not USDC from another network.","signalLabel":"WHOLE REPORT ASSESSMENT","signalCoverage":"News items evaluated","signalScope":"Based on every headline and excerpt in this report; full articles, prices and charts were not analyzed.","impactPOSITIVE":"Positive evidence","impactNEGATIVE":"Negative evidence","impactMIXED":"Mixed evidence","impactNEUTRAL":"Neutral evidence","rulesReport":"NEWS RANKED BY RULES","rulesScope":"The highest-scoring story appears first. This report contains ranked news, sources and selection explanations.","rFreshness":"Recency","rSource":"Source priority","rTotal":"Total priority","languageLabel":"Language","selectAsset":"Select your coin","assetPlaceholder":"Choose a coin…","checkingNews":"Checking relevant news…","newsAvailable":"Relevant news is available today. You can buy the complete report.","noTodayNews":"No relevant news is available today.","newsNetworkError":"The news check failed. Please try again.","retryNews":"Check again","latestLabel":"PREVIOUS RELEVANT NEWS","latestScope":"Relevant news from the last 7 days, excluding today (UTC). Today’s headlines, summaries and signals are available only after payment.","latestEmpty":"No relevant news from previous days was found in the last 7 days.","lastChecked":"Last checked","alertLabel":"Email me about new relevant news for {symbol} · {importance}","alertButton":"Subscribe","alertNote":"Confirm your email to receive free alerts for {symbol}. Checked every {minutes} minutes, subject to source availability and quotas. Unsubscribe at any time. No purchase is made. Importance: {importance}.","alertSent":"Check your email and confirm your subscription. Alerts include the coin, importance and a link to buy the report; never the news headline.","alertSending":"Sending confirmation…","emailUnavailable":"Email alerts are temporarily unavailable. Please try again later.","emailNotConfigured":"Email alerts are not available yet.","invalidEmail":"Enter a valid email address and select a coin.","emailLimit":"Too many requests. Please try again later.","readCard":"Open news card ↗","importanceLabel":"Importance","importanceHigh":"Very important","importanceMedium":"Important","importanceLow":"Less important","importanceUnknown":"Not classified","storySignal":"Indicative signal","signalUnknown":"Not assessed","articleUnavailable":"The news card could not be opened. Please try again.","popupBlocked":"Allow this site to open a new tab for the news card.","openingCard":"Opening news card…","latestSignalScope":"Historical signals describe those publications, not the current market. Open a card to read the evidence and summary.","historyAsset":"Coin","historyAllAssets":"All coins","historyImportance":"Importance","historyAllImportance":"All importance levels","historyHigh":"🔴 Red · very important","historyMedium":"🟠 Orange · important","historyLow":"🟡 Yellow · less important","historyEmpty":"No previous news matches these filters.","historyAllScope":"All coins combines previously collected news. Coverage depends on the coins queried and available sources.","historyLimit":"Showing the 200 most recent matching stories.","alertScope":"Receive alerts for","selectImportance":"Select importance","expiredUnpaid":"The previous transaction expired without a payment. You can prepare a new purchase.","verificationUnavailable":"The payment service could not verify the signature. The payment status will be checked automatically.","paymentRejected":"The payment service rejected the transaction. Its status will be checked automatically.","noTodayFiltered":"No relevant news is available today for this importance level.","insufficientUsdc":"Your connected wallet does not have enough USDC on Algorand to pay for this report.","usdcOptIn":"The connected wallet must opt in to USDC on Algorand before paying.","usdcFrozen":"This USDC holding is frozen and cannot pay for a report.","rekeyedWallet":"Rekeyed wallets are not supported for this payment.","balanceUnavailable":"The USDC balance could not be checked. Please try again before signing.","subscribeTitle":"Subscribe","checkingPayment":"Checking the previous payment automatically…","paymentPendingAuto":"The previous payment is still being checked. Purchases will be available when its status is confirmed.","confirmedPaymentChecking":"Your previous payment is confirmed. Its report is being checked; no additional payment is needed."},"es":{"api":"API para agentes ↗","connect":"Conectar wallet","disconnect":"Desconectar","title":"INTELIGENCIA DE NOTICIAS","intro":"Las noticias del día de cada activo, ordenadas por relevancia. Con fuentes, fechas y una explicación de la selección.","one":"UN REPORTE · UN ACTIVO","once":"Pago único. Sin suscripción.","checking":"Comprobando disponibilidad…","asset":"ACTIVO","buy":"Comprar reporte","pending":"Ya se está procesando un pago.","report":"REPORTE DEL ACTIVO","received":"Recibidos","unique":"Relevantes y únicos","duplicates":"Duplicados agrupados","sources":"Proveedores disponibles","selected":"01 / NOTICIA SELECCIONADA","why":"Por qué esta noticia","criteria":"La puntuación combina relevancia del activo (35), actualidad (25), prioridad predefinida de la fuente (15), evento (15) y cobertura (10). Los empates se resuelven por fecha más reciente y después por URL. La prioridad de la fuente no verifica los hechos.","providerStatus":"Estado de las fuentes","ranked":"Noticias ordenadas por relevancia","today":"Hoy · UTC","editorial":"Las señales BUY/SELL/HOLD interpretan el titular y extracto disponibles mediante reglas. No predicen rentabilidad ni son recomendaciones de inversión personalizadas.","originalLanguage":"Los titulares y fragmentos conservan el idioma original de la fuente. La interfaz y las explicaciones de selección usan el idioma elegido.","partial":"Cobertura parcial: no se pudo consultar algún proveedor.","export":"Descargar reporte (JSON) ↓","noExtra":"Guarda tu reporte comprado sin otro cobro.","start":"Elige un activo para empezar","startText":"Selecciona una moneda para ver las últimas noticias y comprobar el informe de hoy antes de pagar.","noNews":"Si no hay noticias relevantes de hoy (UTC), no se liquida el pago.","choose":"Elige tu activo","catalog":"Bitcoin, Ethereum, Algorand y otros 46 activos.","authorize":"Autoriza el pago","paymentText":"Paga {price} USDC en Algorand mediante x402.","context":"Recibe contexto","contextText":"La noticia principal, las alternativas y las fuentes originales.","footer":"Trading News · Noticias ordenadas por relevancia.","confirmTitle":"Confirmar reporte","reportLabel":"Reporte","networkFee":"Comisión de red a tu cargo","network":"Red","ledger":"¿Usas una hardware wallet? Desbloquéala y abre la app de Algorand. Tu cuenta debe tener USDC activado (opt-in).","authorizeWallet":"Autorizar en mi wallet","creating":"Creando reporte…","preflight":"Comprobando las noticias de hoy…","signing":"Aprueba en tu wallet…","confirming":"Confirmando pago y preparando reporte…","waiting":"Mantén esta página abierta.","ready":"Algorand Mainnet · x402","disabled":"Compras no habilitadas","sponsored":"0 ALGO · patrocinada","recipient":"Destinatario","paid":"Pago confirmado","replayed":"Recuperado sin otro cobro","receipt":"Ver recibo ↗","generated":"Reporte creado","rules":"REGLAS EXPLICABLES","ai":"IA + REGLAS","read":"Leer fuente original ↗","score":"prioridad / 100","rMatch":"Relevancia del activo","rAge":"Antigüedad (horas)","rEvent":"Evento","rCoverage":"Dominios con titulares similares","rIndependence":"La cobertura no demuestra verificación independiente.","speculative":"Titular especulativo: prioridad reducida.","aiEvidence":"Fragmento usado por el selector","available":"Disponible","notConfigured":"Sin configurar","unavailable":"No disponible","networkError":"No se ha podido conectar con el servicio. Inténtalo de nuevo.","sourcesError":"Las fuentes no están disponibles. Vuelve a intentarlo.","walletError":"La wallet no completó la solicitud. Comprueba la conexión, el saldo USDC y el opt-in, y reintenta.","paymentError":"El estado del pago se está comprobando automáticamente. Mantén esta página abierta.","configError":"No se pudo verificar la configuración del servicio. Las compras no están disponibles.","storageError":"Activa el almacenamiento del navegador para poder recuperar un pago interrumpido.","expired":"La solicitud ha caducado. Prepara la compra de nuevo antes de firmar.","security":"Seguridad","regulation":"Regulación","protocol":"Protocolo","adoption":"Adopción","macro":"Macroeconomía","market":"Mercado","walletWarning":"Para pagar se necesita USDC de {network}, no USDC de otra red.","signalLabel":"EVALUACIÓN DEL REPORTE COMPLETO","signalCoverage":"Noticias evaluadas","signalScope":"Basada en todos los titulares y fragmentos de este reporte; no se han analizado artículos completos, precios ni gráficos.","impactPOSITIVE":"Evidencia positiva","impactNEGATIVE":"Evidencia negativa","impactMIXED":"Evidencia mixta","impactNEUTRAL":"Evidencia neutral","rulesReport":"NOTICIAS ORDENADAS MEDIANTE REGLAS","rulesScope":"La noticia con mayor puntuación aparece primero. El reporte incluye noticias ordenadas, fuentes y una explicación de la selección.","rFreshness":"Actualidad","rSource":"Prioridad de la fuente","rTotal":"Prioridad total","languageLabel":"Idioma","selectAsset":"Selecciona la moneda","assetPlaceholder":"Elige una moneda…","checkingNews":"Consultando noticias relevantes…","newsAvailable":"Hay noticias relevantes de hoy. Puedes comprar el informe completo.","noTodayNews":"No hay noticias relevantes disponibles hoy.","newsNetworkError":"La consulta de noticias ha fallado. Vuelve a intentarlo.","retryNews":"Volver a consultar","latestLabel":"NOTICIAS RELEVANTES ANTERIORES","latestScope":"Noticias relevantes de los últimos 7 días, excluyendo hoy (UTC). Los titulares, resúmenes y señales de hoy solo están disponibles después del pago.","latestEmpty":"No se encontraron noticias relevantes de días anteriores en los últimos 7 días.","lastChecked":"Última consulta","alertLabel":"Avísame por email de nuevas noticias relevantes de {symbol} · {importance}","alertButton":"Subscribirse","alertNote":"Confirma tu email para recibir avisos gratuitos de {symbol}. Revisión cada {minutes} minutos, según disponibilidad y cuotas de las fuentes. Puedes darte de baja en cualquier momento. No se realiza ninguna compra. Importancia: {importance}.","alertSent":"Revisa tu correo y confirma la suscripción. Los avisos incluyen la moneda, la importancia y un enlace para comprar el informe; nunca el titular de la noticia.","alertSending":"Enviando confirmación…","emailUnavailable":"Los avisos por email no están disponibles temporalmente. Inténtalo más tarde.","emailNotConfigured":"Los avisos por email todavía no están disponibles.","invalidEmail":"Introduce un email válido y selecciona una moneda.","emailLimit":"Demasiadas solicitudes. Inténtalo más tarde.","readCard":"Abrir ficha de noticia ↗","importanceLabel":"Importancia","importanceHigh":"Muy importante","importanceMedium":"Importante","importanceLow":"Menos importante","importanceUnknown":"Sin clasificar","storySignal":"Señal orientativa","signalUnknown":"Sin evaluar","articleUnavailable":"No se ha podido abrir la ficha de la noticia. Inténtalo de nuevo.","popupBlocked":"Permite que esta web abra una pestaña para mostrar la ficha.","openingCard":"Abriendo ficha de noticia…","latestSignalScope":"Las señales históricas describen aquellas publicaciones, no el mercado actual. Abre una ficha para consultar las evidencias y el resumen.","historyAsset":"Moneda","historyAllAssets":"Todas las monedas","historyImportance":"Importancia","historyAllImportance":"Todas las importancias","historyHigh":"🔴 Rojas · muy importantes","historyMedium":"🟠 Naranjas · importantes","historyLow":"🟡 Amarillas · menos importantes","historyEmpty":"No hay noticias anteriores que coincidan con estos filtros.","historyAllScope":"Todas las monedas reúne las noticias recopiladas anteriormente. La cobertura depende de las monedas consultadas y las fuentes disponibles.","historyLimit":"Se muestran las 200 noticias más recientes que coinciden con los filtros.","alertScope":"Recibir avisos de","selectImportance":"Selecciona la importancia","expiredUnpaid":"La transacción anterior ha caducado sin realizar el pago. Ya puedes preparar una nueva compra.","verificationUnavailable":"El servicio no ha podido verificar la firma. El estado del pago se comprobará automáticamente.","paymentRejected":"El servicio ha rechazado la transacción. Su estado se comprobará automáticamente.","noTodayFiltered":"No hay noticias relevantes hoy para este nivel de importancia.","insufficientUsdc":"La wallet conectada no tiene suficientes USDC de Algorand para pagar este informe.","usdcOptIn":"La wallet conectada debe activar USDC de Algorand (opt-in) antes de pagar.","usdcFrozen":"El saldo USDC de esta cuenta está congelado y no permite pagar el informe.","rekeyedWallet":"Este pago no admite wallets con la clave autorizada cambiada (rekey).","balanceUnavailable":"No se ha podido comprobar el saldo USDC. Inténtalo de nuevo antes de firmar.","subscribeTitle":"Subscribirse","checkingPayment":"Comprobando automáticamente el pago anterior…","paymentPendingAuto":"El pago anterior sigue en comprobación. La compra se habilitará cuando se confirme su estado.","confirmedPaymentChecking":"Tu pago anterior está confirmado. Estamos comprobando su informe; no necesitas realizar otro pago."},"fr":{"api":"API pour agents ↗","connect":"Connecter le portefeuille","disconnect":"Déconnecter","title":"INTELLIGENCE DE L’ACTUALITÉ","intro":"Les actualités du jour de chaque actif, classées par pertinence. Avec sources, dates et explication de la sélection.","one":"UN RAPPORT · UN ACTIF","once":"Paiement unique. Sans abonnement.","checking":"Vérification de la disponibilité…","asset":"ACTIF","buy":"Acheter le rapport","pending":"Un paiement est déjà en cours.","report":"RAPPORT DE L’ACTIF","received":"Reçus","unique":"Pertinents et uniques","duplicates":"Doublons regroupés","sources":"Fournisseurs disponibles","selected":"01 / ACTUALITÉ SÉLECTIONNÉE","why":"Pourquoi cet article","criteria":"Le score combine pertinence de l’actif (35), récence (25), priorité prédéfinie de la source (15), événement (15) et couverture (10). En cas d’égalité, la date la plus récente puis l’URL départagent les articles. Le poids des sources ne vérifie pas les faits.","providerStatus":"Disponibilité des sources","ranked":"Actualités classées par pertinence","today":"Aujourd’hui · UTC","editorial":"Les signaux BUY/SELL/HOLD interprètent le titre et l’extrait disponibles selon des règles. Ils ne prédisent pas de rendement et ne sont pas des conseils en investissement personnalisés.","originalLanguage":"Les titres et extraits restent dans la langue originale. L’interface et les explications suivent la langue choisie.","partial":"Couverture partielle : certains fournisseurs n’ont pas pu être consultés.","export":"Télécharger le rapport (JSON) ↓","noExtra":"Enregistrez votre rapport acheté sans frais supplémentaires.","start":"Choisissez un actif pour commencer","startText":"Sélectionnez un actif pour voir les dernières actualités et vérifier le rapport du jour avant de payer.","noNews":"En l’absence d’actualité pertinente aujourd’hui (UTC), aucun paiement n’est encaissé.","choose":"Choisissez votre actif","catalog":"Bitcoin, Ethereum, Algorand et 46 autres actifs.","authorize":"Autorisez le paiement","paymentText":"Payez {price} USDC sur Algorand via x402.","context":"Recevez du contexte","contextText":"L’article sélectionné, les alternatives et les sources originales.","footer":"Trading News · Actualités classées par pertinence.","confirmTitle":"Confirmer le rapport","reportLabel":"Rapport","networkFee":"Vos frais de réseau","network":"Réseau","ledger":"Portefeuille matériel ? Déverrouillez-le et ouvrez l’application Algorand. Votre compte doit avoir activé USDC (opt-in).","authorizeWallet":"Autoriser dans mon portefeuille","creating":"Création du rapport…","preflight":"Vérification des actualités du jour…","signing":"Confirmez dans votre portefeuille…","confirming":"Confirmation du paiement et préparation du rapport…","waiting":"Gardez cette page ouverte.","ready":"Algorand Mainnet · x402","disabled":"Achats non activés","sponsored":"0 ALGO · sponsorisé","recipient":"Destinataire","paid":"Paiement confirmé","replayed":"Récupéré sans nouveau paiement","receipt":"Voir le reçu ↗","generated":"Rapport créé","rules":"RÈGLES EXPLICABLES","ai":"IA + RÈGLES","read":"Lire la source originale ↗","score":"priorité / 100","rMatch":"Pertinence pour l’actif","rAge":"Ancienneté (heures)","rEvent":"Événement","rCoverage":"Domaines aux titres similaires","rIndependence":"La couverture ne prouve pas une vérification indépendante.","speculative":"Titre spéculatif : priorité réduite.","aiEvidence":"Extrait utilisé pour la sélection","available":"Disponible","notConfigured":"Non configuré","unavailable":"Indisponible","networkError":"Connexion au service impossible. Réessayez.","sourcesError":"Les sources sont indisponibles. Veuillez réessayer.","walletError":"Le portefeuille n’a pas terminé la demande. Vérifiez la connexion, le solde USDC et l’opt-in, puis réessayez.","paymentError":"L’état du paiement est vérifié automatiquement. Gardez cette page ouverte.","configError":"La configuration du service n’a pas pu être vérifiée. Achats indisponibles.","storageError":"Activez le stockage du navigateur pour récupérer un paiement interrompu.","expired":"La demande a expiré. Préparez de nouveau l’achat avant de signer.","security":"Sécurité","regulation":"Réglementation","protocol":"Protocole","adoption":"Adoption","macro":"Macroéconomie","market":"Marché","walletWarning":"Pour payer, il faut des USDC sur {network}, pas sur un autre réseau.","signalLabel":"ÉVALUATION DU RAPPORT COMPLET","signalCoverage":"Actualités évaluées","signalScope":"Basée sur tous les titres et extraits du rapport ; les articles complets, prix et graphiques ne sont pas analysés.","impactPOSITIVE":"Éléments positifs","impactNEGATIVE":"Éléments négatifs","impactMIXED":"Éléments contrastés","impactNEUTRAL":"Éléments neutres","rulesReport":"ACTUALITÉS CLASSÉES PAR RÈGLES","rulesScope":"L’article ayant le meilleur score apparaît en premier. Le rapport présente les actualités classées, leurs sources et les raisons de la sélection.","rFreshness":"Récence","rSource":"Priorité de la source","rTotal":"Priorité totale","languageLabel":"Langue","selectAsset":"Sélectionnez votre actif","assetPlaceholder":"Choisissez un actif…","checkingNews":"Recherche des actualités pertinentes…","newsAvailable":"Des actualités pertinentes sont disponibles aujourd’hui. Vous pouvez acheter le rapport complet.","noTodayNews":"Aucune actualité pertinente n’est disponible aujourd’hui.","newsNetworkError":"La recherche a échoué. Veuillez réessayer.","retryNews":"Vérifier à nouveau","latestLabel":"ACTUALITÉS PERTINENTES ANTÉRIEURES","latestScope":"Actualités pertinentes des 7 derniers jours, hors aujourd’hui (UTC). Les titres, résumés et signaux du jour sont disponibles uniquement après paiement.","latestEmpty":"Aucune actualité pertinente des jours précédents trouvée sur les 7 derniers jours.","lastChecked":"Dernière vérification","alertLabel":"Me prévenir par e-mail des nouvelles actualités de {symbol} · {importance}","alertButton":"S’abonner","alertNote":"Confirmez votre e-mail pour les alertes gratuites de {symbol}. Vérification toutes les {minutes} minutes, selon la disponibilité et les quotas des sources. Désabonnement possible à tout moment. Aucun achat effectué. Importance : {importance}.","alertSent":"Consultez votre messagerie et confirmez l’abonnement. Les alertes indiquent la monnaie, l’importance et un lien pour acheter le rapport, jamais le titre de l’actualité.","alertSending":"Envoi de la confirmation…","emailUnavailable":"Les alertes e-mail sont temporairement indisponibles. Réessayez plus tard.","emailNotConfigured":"Les alertes e-mail ne sont pas encore disponibles.","invalidEmail":"Saisissez une adresse e-mail valide et sélectionnez un actif.","emailLimit":"Trop de demandes. Réessayez plus tard.","readCard":"Ouvrir la fiche ↗","importanceLabel":"Importance","importanceHigh":"Très importante","importanceMedium":"Importante","importanceLow":"Moins importante","importanceUnknown":"Non classée","storySignal":"Signal indicatif","signalUnknown":"Non évalué","articleUnavailable":"Impossible d’ouvrir la fiche d’actualité. Réessayez.","popupBlocked":"Autorisez l’ouverture d’un nouvel onglet pour consulter la fiche.","openingCard":"Ouverture de la fiche…","latestSignalScope":"Les signaux historiques concernent ces publications, pas le marché actuel. Ouvrez une fiche pour consulter les éléments et le résumé.","historyAsset":"Monnaie","historyAllAssets":"Toutes les monnaies","historyImportance":"Importance","historyAllImportance":"Tous les niveaux","historyHigh":"🔴 Rouges · très importantes","historyMedium":"🟠 Orange · importantes","historyLow":"🟡 Jaunes · moins importantes","historyEmpty":"Aucune actualité antérieure ne correspond à ces filtres.","historyAllScope":"Toutes les monnaies regroupe les actualités déjà collectées. La couverture dépend des monnaies consultées et des sources disponibles.","historyLimit":"Les 200 actualités correspondantes les plus récentes sont affichées.","alertScope":"Recevoir des alertes pour","selectImportance":"Sélectionnez l’importance","expiredUnpaid":"La transaction précédente a expiré sans paiement. Vous pouvez préparer un nouvel achat.","verificationUnavailable":"Le service n’a pas pu vérifier la signature. L’état du paiement sera vérifié automatiquement.","paymentRejected":"Le service a refusé la transaction. Son état sera vérifié automatiquement.","noTodayFiltered":"Aucune actualité pertinente n’est disponible aujourd’hui pour ce niveau d’importance.","insufficientUsdc":"Le portefeuille connecté ne dispose pas de suffisamment d’USDC sur Algorand pour payer ce rapport.","usdcOptIn":"Le portefeuille connecté doit activer USDC sur Algorand (opt-in) avant de payer.","usdcFrozen":"Les USDC de ce compte sont gelés et ne peuvent pas payer le rapport.","rekeyedWallet":"Les portefeuilles avec changement de clé autorisée (rekey) ne sont pas pris en charge.","balanceUnavailable":"Le solde USDC n’a pas pu être vérifié. Réessayez avant de signer.","subscribeTitle":"S’abonner","checkingPayment":"Vérification automatique du paiement précédent…","paymentPendingAuto":"Le paiement précédent est en cours de vérification. L’achat sera disponible lorsque son état sera confirmé.","confirmedPaymentChecking":"Votre paiement précédent est confirmé. Son rapport est en cours de vérification ; aucun paiement supplémentaire n’est nécessaire."},"de":{"api":"API für Agenten ↗","connect":"Wallet verbinden","disconnect":"Trennen","title":"NACHRICHTENANALYSE","intro":"Die heutigen Nachrichten zu jedem Asset, nach Relevanz geordnet. Mit Quellen, Datum und Begründung der Auswahl.","one":"EIN BERICHT · EIN ASSET","once":"Einmalige Zahlung. Kein Abonnement.","checking":"Verfügbarkeit wird geprüft…","asset":"ASSET","buy":"Bericht kaufen","pending":"Eine Zahlung wird bereits bearbeitet.","report":"ASSET-BERICHT","received":"Empfangen","unique":"Relevant und eindeutig","duplicates":"Duplikate gruppiert","sources":"Verfügbare Anbieter","selected":"01 / AUSGEWÄHLTE NACHRICHT","why":"Warum diese Nachricht","criteria":"Die Punktzahl kombiniert Asset-Relevanz (35), Aktualität (25), vordefinierte Quellenpriorität (15), Ereignis (15) und Berichterstattung (10). Bei Gleichstand entscheiden das neueste Datum und dann die URL. Quellengewichte sind keine Faktenprüfung.","providerStatus":"Verfügbarkeit der Quellen","ranked":"Nachrichten nach Relevanz","today":"Heute · UTC","editorial":"BUY/SELL/HOLD-Signale werten die verfügbare Überschrift und den Auszug anhand von Regeln aus. Sie sagen keine Renditen voraus und sind keine persönlichen Anlageempfehlungen.","originalLanguage":"Überschriften und Auszüge bleiben in der Originalsprache. Oberfläche und Auswahlbegründungen verwenden die gewählte Sprache.","partial":"Teilweise Abdeckung: Einige Anbieter konnten nicht abgefragt werden.","export":"Bericht herunterladen (JSON) ↓","noExtra":"Speichere deinen gekauften Bericht ohne weitere Kosten.","start":"Wähle ein Asset aus","startText":"Wählen Sie eine Kryptowährung, um aktuelle Nachrichten zu sehen und den heutigen Bericht vor dem Bezahlen zu prüfen.","noNews":"Gibt es heute (UTC) keine relevanten Nachrichten, wird keine Zahlung abgewickelt.","choose":"Wähle dein Asset","catalog":"Bitcoin, Ethereum, Algorand und 46 weitere Assets.","authorize":"Zahlung autorisieren","paymentText":"Zahle {price} USDC auf Algorand über x402.","context":"Erhalte Kontext","contextText":"Die ausgewählte Nachricht, Alternativen und Originalquellen.","footer":"Trading News · Nachrichten nach Relevanz.","confirmTitle":"Bericht bestätigen","reportLabel":"Bericht","networkFee":"Deine Netzwerkgebühr","network":"Netzwerk","ledger":"Hardware-Wallet? Entsperre sie und öffne die Algorand-App. USDC muss für dein Konto aktiviert sein (Opt-in).","authorizeWallet":"In meiner Wallet autorisieren","creating":"Bericht wird erstellt…","preflight":"Heutige Nachrichten werden geprüft…","signing":"In deiner Wallet bestätigen…","confirming":"Zahlung bestätigen und Bericht vorbereiten…","waiting":"Lass diese Seite geöffnet.","ready":"Algorand Mainnet · x402","disabled":"Käufe sind nicht aktiviert","sponsored":"0 ALGO · gesponsert","recipient":"Empfänger","paid":"Zahlung bestätigt","replayed":"Ohne weitere Zahlung wiederhergestellt","receipt":"Beleg ansehen ↗","generated":"Bericht erstellt","rules":"NACHVOLLZIEHBARE REGELN","ai":"KI + REGELN","read":"Originalquelle lesen ↗","score":"Priorität / 100","rMatch":"Asset-Relevanz","rAge":"Alter (Stunden)","rEvent":"Ereignis","rCoverage":"Domains mit ähnlichen Überschriften","rIndependence":"Berichterstattung beweist keine unabhängige Prüfung.","speculative":"Spekulative Überschrift: geringere Priorität.","aiEvidence":"Für die Auswahl verwendeter Auszug","available":"Verfügbar","notConfigured":"Nicht konfiguriert","unavailable":"Nicht verfügbar","networkError":"Verbindung zum Dienst fehlgeschlagen. Versuchen Sie es erneut.","sourcesError":"Die Quellen sind nicht verfügbar. Bitte versuchen Sie es erneut.","walletError":"Die Wallet hat die Anfrage nicht abgeschlossen. Prüfe Verbindung, USDC-Guthaben und Opt-in und versuche es erneut.","paymentError":"Der Zahlungsstatus wird automatisch geprüft. Lassen Sie diese Seite geöffnet.","configError":"Die Dienstkonfiguration konnte nicht geprüft werden. Käufe sind nicht verfügbar.","storageError":"Aktiviere den Browserspeicher, um eine unterbrochene Zahlung wiederherzustellen.","expired":"Die Anfrage ist abgelaufen. Bereite den Kauf vor der Unterschrift erneut vor.","security":"Sicherheit","regulation":"Regulierung","protocol":"Protokoll","adoption":"Akzeptanz","macro":"Makroökonomie","market":"Markt","walletWarning":"Zum Bezahlen brauchst du USDC auf {network}, keine USDC aus einem anderen Netzwerk.","signalLabel":"BEWERTUNG DES GESAMTEN BERICHTS","signalCoverage":"Bewertete Nachrichten","signalScope":"Basiert auf allen Überschriften und Auszügen dieses Berichts; vollständige Artikel, Kurse und Charts wurden nicht analysiert.","impactPOSITIVE":"Positive Hinweise","impactNEGATIVE":"Negative Hinweise","impactMIXED":"Gemischte Hinweise","impactNEUTRAL":"Neutrale Hinweise","rulesReport":"NACH REGELN GEORDNETE NACHRICHTEN","rulesScope":"Die Nachricht mit der höchsten Punktzahl steht zuerst. Der Bericht enthält geordnete Nachrichten, Quellen und Auswahlbegründungen.","rFreshness":"Aktualität","rSource":"Quellenpriorität","rTotal":"Gesamtpriorität","languageLabel":"Sprache","selectAsset":"Wählen Sie Ihre Kryptowährung","assetPlaceholder":"Kryptowährung auswählen…","checkingNews":"Relevante Nachrichten werden geprüft…","newsAvailable":"Heute sind relevante Nachrichten verfügbar. Sie können den vollständigen Bericht kaufen.","noTodayNews":"Heute sind keine relevanten Nachrichten verfügbar.","newsNetworkError":"Die Abfrage ist fehlgeschlagen. Bitte versuchen Sie es erneut.","retryNews":"Erneut prüfen","latestLabel":"FRÜHERE RELEVANTE NACHRICHTEN","latestScope":"Relevante Nachrichten der letzten 7 Tage ohne heute (UTC). Heutige Überschriften, Zusammenfassungen und Signale sind erst nach Zahlung verfügbar.","latestEmpty":"Keine relevanten Nachrichten früherer Tage innerhalb der letzten 7 Tage gefunden.","lastChecked":"Zuletzt geprüft","alertLabel":"E-Mail-Benachrichtigungen zu neuen relevanten Nachrichten über {symbol} · {importance}","alertButton":"Abonnieren","alertNote":"Bestätigen Sie Ihre E-Mail für kostenlose Benachrichtigungen zu {symbol}. Prüfung alle {minutes} Minuten, abhängig von Verfügbarkeit und Abfragelimits der Quellen. Jederzeit abmeldbar. Es erfolgt kein Kauf. Wichtigkeit: {importance}.","alertSent":"Prüfen Sie Ihr Postfach und bestätigen Sie das Abonnement. Benachrichtigungen enthalten die Währung, Wichtigkeit und einen Link zum Kauf des Berichts, niemals die Schlagzeile.","alertSending":"Bestätigung wird gesendet…","emailUnavailable":"E-Mail-Benachrichtigungen sind vorübergehend nicht verfügbar. Bitte versuchen Sie es später erneut.","emailNotConfigured":"E-Mail-Benachrichtigungen sind noch nicht verfügbar.","invalidEmail":"Geben Sie eine gültige E-Mail-Adresse ein und wählen Sie eine Kryptowährung.","emailLimit":"Zu viele Anfragen. Bitte versuchen Sie es später erneut.","readCard":"Nachrichtenübersicht öffnen ↗","importanceLabel":"Bedeutung","importanceHigh":"Sehr wichtig","importanceMedium":"Wichtig","importanceLow":"Weniger wichtig","importanceUnknown":"Nicht eingestuft","storySignal":"Orientierendes Signal","signalUnknown":"Nicht bewertet","articleUnavailable":"Die Nachrichtenkarte konnte nicht geöffnet werden. Versuchen Sie es erneut.","popupBlocked":"Erlauben Sie dieser Website, einen neuen Tab für die Nachricht zu öffnen.","openingCard":"Nachricht wird geöffnet…","latestSignalScope":"Historische Signale beziehen sich auf die damalige Veröffentlichung, nicht auf den aktuellen Markt. Öffnen Sie eine Nachricht für Belege und Zusammenfassung.","historyAsset":"Kryptowährung","historyAllAssets":"Alle Kryptowährungen","historyImportance":"Bedeutung","historyAllImportance":"Alle Wichtigkeitsstufen","historyHigh":"🔴 Rot · sehr wichtig","historyMedium":"🟠 Orange · wichtig","historyLow":"🟡 Gelb · weniger wichtig","historyEmpty":"Keine früheren Nachrichten entsprechen diesen Filtern.","historyAllScope":"Alle Kryptowährungen zeigt bereits gesammelte Nachrichten. Die Abdeckung hängt von den abgefragten Währungen und verfügbaren Quellen ab.","historyLimit":"Die 200 neuesten passenden Nachrichten werden angezeigt.","alertScope":"Benachrichtigungen erhalten für","selectImportance":"Wichtigkeit auswählen","expiredUnpaid":"Die vorherige Transaktion ist ohne Zahlung abgelaufen. Sie können einen neuen Kauf vorbereiten.","verificationUnavailable":"Der Dienst konnte die Signatur nicht prüfen. Der Zahlungsstatus wird automatisch geprüft.","paymentRejected":"Der Dienst hat die Transaktion abgelehnt. Ihr Status wird automatisch geprüft.","noTodayFiltered":"Für diese Wichtigkeitsstufe sind heute keine relevanten Nachrichten verfügbar.","insufficientUsdc":"Das verbundene Wallet hat nicht genügend USDC auf Algorand, um diesen Bericht zu bezahlen.","usdcOptIn":"Das verbundene Wallet muss USDC auf Algorand vor der Zahlung aktivieren (Opt-in).","usdcFrozen":"Der USDC-Bestand dieses Kontos ist eingefroren und kann den Bericht nicht bezahlen.","rekeyedWallet":"Wallets mit geänderter autorisierter Schlüsseladresse (Rekey) werden nicht unterstützt.","balanceUnavailable":"Der USDC-Bestand konnte nicht geprüft werden. Versuchen Sie es vor dem Signieren erneut.","subscribeTitle":"Abonnieren","checkingPayment":"Vorherige Zahlung wird automatisch geprüft…","paymentPendingAuto":"Die vorherige Zahlung wird noch geprüft. Der Kauf wird nach Bestätigung ihres Status freigegeben.","confirmedPaymentChecking":"Ihre vorherige Zahlung ist bestätigt. Der Bericht wird geprüft; eine weitere Zahlung ist nicht erforderlich."}};
Object.assign(TEXT.en,{newsToday:'News today (UTC): ',noNewsAny:'No news for any coin today (UTC).'});
Object.assign(TEXT.es,{newsToday:'Noticias hoy (UTC): ',noNewsAny:'Hoy (UTC) no hay noticias para ninguna moneda.'});
Object.assign(TEXT.fr,{newsToday:'Actualités du jour (UTC) : ',noNewsAny:'Aucune actualité pour aucun actif aujourd’hui (UTC).'});
Object.assign(TEXT.de,{newsToday:'Nachrichten heute (UTC): ',noNewsAny:'Heute (UTC) gibt es für keine Kryptowährung Nachrichten.'});
const API = 'https://x402-trading-news.onrender.com';
// Public receiving address returned by the existing registered BTC payment endpoint.
const PAY_TO = 'EH5BHWISPB7MEIITJIWF2VB3YFN2RZLJMWBRV6CBJV76FBAEAALL6XKSQE';
const MAINNET = 'algorand:wGHE2Pwdvd7S12BL5FaOP20EGYesN73ktiC1qzkkit8=';
const PENDING_KEY = 'tradingnews.pending.v5';
const $ = id => document.getElementById(id);
let reportAccess = '';
let paymentChecking=false, paymentTimer=null, paymentNotice='checkingPayment';
let historySymbol='',historyData=null,historyState='idle',historyError='',historySequence=0;
let newsState = 'idle', newsData = null, newsError = '', newsSequence = 0, alertState = '', alertSending = false;
let todayNews = null;
let lang = 'en', config, report, quote, walletAddress = '', walletModule, busyState = '', pending = null, activeError = '';
try { const saved=localStorage.getItem('tradingnews.language'); if(TEXT[saved])lang=saved; pending=JSON.parse(localStorage.getItem(PENDING_KEY)||'null'); } catch {}
const urlParams=new URLSearchParams(location.search);if(TEXT[urlParams.get('lang')])lang=urlParams.get('lang');
function t(key){return (TEXT[lang][key] || TEXT.en[key] || key).replace('{price}',price());}
function node(tag,text,cls){const n=document.createElement(tag);if(text!==undefined)n.textContent=text;if(cls)n.className=cls;return n;}
function link(url,label){const a=node('a',label);try{const u=new URL(url);if(u.protocol==='https:'||u.protocol==='http:'){a.href=u.href;a.target='_blank';a.rel='noopener noreferrer';}}catch{}return a;}
function date(value){return new Date(value).toLocaleString(lang,{dateStyle:'medium',timeStyle:'short',timeZone:'UTC'})+' UTC';}
function atomicPrice(value){
 if(typeof value!=='string'||!/^\d+(\.\d{1,6})?$/.test(value))throw failure('configError');
 const [whole,fraction='']=value.split('.');const amount=BigInt(whole)*1000000n+BigInt(fraction.padEnd(6,'0'));
 if(amount<=0n||amount>9007199254740991n)throw failure('configError');return amount.toString();
}
function price(value=config?.price_usdc){
 if(!value)return '—';
 const [whole,fraction='']=value.split('.');
 const decimal=new Intl.NumberFormat(lang).formatToParts(1.1).find(p=>p.type==='decimal').value;
 const decimals=fraction.replace(/0+$/,'');
 return new Intl.NumberFormat(lang).format(BigInt(whole))+(decimals?decimal+decimals:'');
}
function refresh(){
 document.documentElement.lang=lang;
 document.querySelectorAll('[data-t]').forEach(n=>n.textContent=t(n.dataset.t));
 const warning=t('walletWarning').split('{network}');$('wallet-warning').replaceChildren(document.createTextNode(warning[0]),node('strong','Algorand'),document.createTextNode(warning[1]));
 $('language').value=lang;$('language').setAttribute('aria-label',t('languageLabel'));
 $('price').textContent=price();$('buy-text').textContent=t('buy')+' · '+price()+' USDC';
 $('availability').textContent=t(!config?'checking':config.payments_enabled?'ready':'disabled');
 $('wallet-text').textContent=walletAddress?walletAddress.slice(0,6)+'…'+walletAddress.slice(-4):t('connect');
 $('progress-title').textContent=t(busyState||'creating');$('progress-note').textContent=t('waiting');
 if(activeError)$('error').textContent=t(activeError);
 renderNews();if(quote)renderQuote();if(report)renderReport();
}
function setBusy(key=''){
 busyState=key;$('progress').hidden=!key;
 $('buy').disabled=!!key||!!pending||!config?.payments_enabled||newsState!=='available';
 $('wallet').disabled=!!key||!config?.payments_enabled;
 // A pending payment blocks another charge, not browsing other news.
 $('asset').disabled=!!key||!config;
 $('importance').disabled=!!key||!config||!$('asset').value;
 $('confirm').disabled=!!key;$('cancel').disabled=!!key;
 document.querySelectorAll('[data-symbol]').forEach(n=>n.disabled=!!key||!!pending||!config);
 refresh();
}
function error(key){activeError=key;$('error').textContent=t(key);$('error').hidden=false;}
function clearError(){activeError='';$('error').hidden=true;}
function clearReport(){reportAccess='';report=null;$('report').hidden=true;$('empty').hidden=false;}
function failure(key){return Object.assign(new Error(key),{uiKey:key});}
async function request(path,options={}){
 const controller=new AbortController();const timeout=setTimeout(()=>controller.abort(),125000);
 try{
  const response=await fetch(API+path,{...options,signal:controller.signal,cache:'no-store'});
  let data;try{data=await response.json();}catch{throw failure('networkError');}
  if(!response.ok){const detail=typeof data.detail==='string'?data.detail:data.detail?.code;
   if(detail==='SOURCES_UNAVAILABLE')throw failure('sourcesError');
   if(detail==='NO_TODAY_NEWS')throw failure($('importance').value==='all'?'noTodayNews':'noTodayFiltered');
   if(detail==='VERIFICATION_UNAVAILABLE_NO_SETTLEMENT')throw failure('verificationUnavailable');
   if(detail==='FACILITATOR_REJECTED_PAYMENT')throw failure('paymentRejected');
   const mailErrors={EMAIL_NOT_CONFIGURED:'emailNotConfigured',EMAIL_UNAVAILABLE:'emailUnavailable',INVALID_EMAIL:'invalidEmail',EMAIL_LIMIT:'emailLimit'};
   if(mailErrors[detail])throw failure(mailErrors[detail]);
   if(detail==='PURCHASES_DISABLED')throw failure('disabled');
   const walletErrors={INSUFFICIENT_USDC_BALANCE:'insufficientUsdc',USDC_OPT_IN_REQUIRED:'usdcOptIn',USDC_HOLDING_FROZEN:'usdcFrozen',REKEYED_WALLET_UNSUPPORTED:'rekeyedWallet',WALLET_BALANCE_UNAVAILABLE:'balanceUnavailable'};
   if(walletErrors[detail])throw failure(walletErrors[detail]);
   throw failure(pending?'paymentError':'networkError');
  }
  return {response,data};
 }catch(e){if(e.uiKey)throw e;throw failure(pending?'paymentError':'networkError');}
 finally{clearTimeout(timeout);}
}
async function getWallet(){if(!walletModule)walletModule=await import('./wallet.js?v=news-sources-580');return walletModule;}
async function connect(){walletAddress=await (await getWallet()).connect(config);refresh();return walletAddress;}
function renderQuote(){
 $('checkout-price').textContent=price(quote.price_usdc)+' USDC';
 $('checkout-asset').textContent=quote.symbol+' · '+$('asset').selectedOptions[0]?.textContent.split(' · ').slice(1).join(' · ')+' · '+$('importance').selectedOptions[0]?.textContent;
 $('checkout-fee').textContent=quote.network_fee_sponsored?t('sponsored'):(quote.customer_network_fee_microalgo/1e6)+' ALGO';
 $('recipient').textContent=t('recipient')+': '+quote.challenge.accepts[0].payTo;
}
function validatePending(p){
 const u=new URL(p.url);
 if(u.origin!==API||!/^\/api\/(?:web\/)?v1\/market-signal\/[A-Z0-9]+$/.test(u.pathname)||(u.search&&!/^\?importance=(high|medium|low)$/.test(u.search))||u.hash||typeof p.signature!=='string'||p.signature.length>32768)throw failure('paymentError');
 return u.pathname+u.search;
}
function importanceQuery(){const value=$('importance').value;return value==='all'?'':'?importance='+value;}
function samePayment(a,b){return !!a&&!!b&&a.signature===b.signature&&a.url===b.url;}
function forgetPending(current){
 const saved=storedPending();
 if(samePayment(saved,current)){localStorage.removeItem(PENDING_KEY);if(samePayment(pending,current))pending=null;}
 else if(samePayment(pending,current))pending=saved;
}
async function paymentStatus(current){
 validatePending(current);
 const {data}=await request('/api/v1/payments/status',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({signature:current.signature})});
 return data;
}
async function reconcilePending(current){
 let data;try{data=await paymentStatus(current);}catch{return;}
 if(data.state==='expired_not_paid'&&data.can_retry===true){forgetPending(current);throw failure('expiredUnpaid');}
}
function schedulePaymentCheck(){
 clearTimeout(paymentTimer);paymentTimer=null;
 if(pending&&config&&!document.hidden)paymentTimer=setTimeout(()=>{paymentTimer=null;checkSavedPayment();},15000);
}
async function checkSavedPayment(){
 if(!pending||!config||paymentChecking)return;
 if(busyState||document.hidden){schedulePaymentCheck();return;}
 const current=pending;let readingReport=false;
 paymentChecking=true;paymentNotice='checkingPayment';refresh();
 try{
  const data=await paymentStatus(current);
  if(!samePayment(pending,current))return;
  if(data.state==='expired_not_paid'&&data.can_retry===true){
   forgetPending(current);
   if(['paymentError','verificationUnavailable','paymentRejected','expiredUnpaid'].includes(activeError))clearError();
  }else if(data.state==='settled'){
   // Read a confirmed purchase; never submit an uncertain payment automatically.
   if(!busyState){readingReport=true;setBusy('creating');await resume();}
  }else paymentNotice=data.state==='confirmed_without_report'?'confirmedPaymentChecking':'paymentPendingAuto';
 }catch{paymentNotice='paymentPendingAuto';}
 finally{
  paymentChecking=false;
  setBusy(readingReport?'':busyState);
  schedulePaymentCheck();
 }
}
async function resume(checkStatus=false){
 const current=pending;if(!current)throw failure('paymentError');
 if(checkStatus)await reconcilePending(current);
 let result;try{result=await request(validatePending(current),{headers:{'PAYMENT-SIGNATURE':current.signature}});}catch(e){await reconcilePending(current);throw e;}
 const {response,data}=result;
 let receipt;try{receipt=JSON.parse(atob(response.headers.get('PAYMENT-RESPONSE')||''));}catch{throw failure('paymentError');}
 if(data.billing?.charged!==true||receipt.success!==true||receipt.network!==config.network_caip||
    receipt.transaction!==data.billing.receipt?.transaction||!data.best_article||!Array.isArray(data.articles)||
    data.symbol!==new URL(current.url).pathname.split('/').pop()||
    (data.importance||'all')!==(new URL(current.url).searchParams.get('importance')||'all'))throw failure('paymentError');
 setBusy('creating');
 // Render the purchased result after settlement has been confirmed, with a visible status update.
 await new Promise(resolve=>requestAnimationFrame(()=>requestAnimationFrame(resolve)));
 report=data;reportAccess=current.signature;forgetPending(current);renderNews();renderReport();
 $('report').scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth',block:'start'});
}
function importanceBadge(a){
 const level=a.insight?.importance?.level||a.importance?.level;
 const known=['high','medium','low'].includes(level),key={high:'importanceHigh',medium:'importanceMedium',low:'importanceLow'}[level]||'importanceUnknown';
 const badge=node('span',undefined,'importance-badge'),dot=node('span',undefined,'importance-dot '+(known?level:'unknown'));
 dot.setAttribute('aria-hidden','true');badge.append(dot,node('span',t(key)));badge.setAttribute('aria-label',t('importanceLabel')+': '+t(key));return badge;
}
function signalBadge(a){
 const signal=a.insight?.recommendation?.signal||a.recommendation?.signal;
 const valid=['BUY','SELL','HOLD'].includes(signal),badge=node('div',undefined,'story-signal');
 badge.append(node('small',t('storySignal')),node('strong',valid?signal:t('signalUnknown'),valid?'signal-'+signal.toLowerCase():''));return badge;
}
function articleLink(a,label,symbol,paid=false){
 const anchor=node('a',label);anchor.href=API+'/news/'+encodeURIComponent(symbol)+'/'+encodeURIComponent(a.id)+'?lang='+lang;anchor.target='_blank';anchor.rel='noopener noreferrer';anchor.className='article-link';
 if(paid){
  anchor.addEventListener('click',async event=>{
   event.preventDefault();if(!reportAccess){error('articleUnavailable');return;}
   const access=reportAccess,url=anchor.href;
   const tab=window.open('about:blank','_blank');if(!tab){error('popupBlocked');return;}
   tab.opener=null;tab.document.title=t('openingCard');tab.document.body.textContent=t('openingCard');
   try{
    const controller=new AbortController(),timer=setTimeout(()=>controller.abort(),20000);
    let response;try{response=await fetch(url,{headers:{'PAYMENT-SIGNATURE':access},cache:'no-store',signal:controller.signal});}finally{clearTimeout(timer);}
    if(!response.ok||!response.headers.get('Content-Type')?.includes('text/html'))throw Error();
    const html=await response.text();if(tab.closed)return;
    const blob=URL.createObjectURL(new Blob([html],{type:'text/html'}));tab.location.replace(blob);setTimeout(()=>URL.revokeObjectURL(blob),60000);
   }catch{tab.close();error('articleUnavailable');}
  });
 }
 return anchor;
}
function historicalArticles(){
 const today=new Date().toISOString().slice(0,10);
 const importance=$('history-importance').value;
 return (historyData?.articles||[]).filter(a=>{const dt=new Date(a.published_at);return Number.isFinite(dt.getTime())&&dt.toISOString().slice(0,10)<today&&typeof a.symbol==='string'&&(historySymbol==='ALL'||a.symbol===historySymbol)&&(importance==='all'||a.importance?.level===importance);});
}
function renderReport(){
 const assessment=report.assessment;
 const valid=assessment&&['BUY','SELL','HOLD'].includes(assessment.signal);
 $('signal-panel').hidden=!valid;$('rules-panel').hidden=!!valid;
 if(valid){
  $('signal-symbol').textContent=report.symbol;
  $('signal-value').textContent=assessment.signal;
  $('signal-rationale').textContent=assessment.rationale?.[lang]||assessment.rationale?.en||'';
  $('signal-count').textContent=t('signalCoverage')+': '+assessment.evaluated_count+' / '+report.articles.length;
 }

 $('report').hidden=false;$('empty').hidden=true;$('report-title').textContent=report.name+' / '+report.symbol;
 $('updated').textContent=t('generated')+': '+date(report.generated_at);
 $('receipt').replaceChildren(node('span',t(report.billing.replayed?'replayed':'paid')+' · '),link('https://explorer.perawallet.app/tx/'+report.billing.receipt.transaction,t('receipt')));
 for(const key of ['received','unique','duplicates'])$(key).textContent=report.stats?.[key]??'—';
 $('sources').textContent=report.providers.filter(p=>p.status==='ok').length;
 $('method').textContent=t(report.selection_method==='semantic_and_rules'?'ai':'rules');
 const a=report.best_article;
 $('best').replaceChildren(node('h3',a.title),node('p',a.summary),node('div',a.source+' · '+date(a.published_at),'source'),importanceBadge(a),signalBadge(a),articleLink(a,t('readCard'),report.symbol,true));
 const reasons=[
  `${t('rMatch')}: ${a.components.relevance}/35`,
  `${t('rFreshness')}: ${a.components.freshness}/25 · ${t('rAge')}: ${a.age_hours}`,
  `${t('rSource')}: ${a.components.source_priority}/15`,
  `${t('rEvent')}: ${t(a.category)} · ${a.components.event}/15`,
  `${t('rCoverage')}: ${a.coverage_domains} · ${a.components.coverage}/10. ${t('rIndependence')}`,
  `${t('rTotal')}: ${a.score}/100`
 ];
 if(a.speculative)reasons.push(t('speculative'));
 if(report.ai?.evidence_quote)reasons.push(t('aiEvidence')+': “'+report.ai.evidence_quote+'”');
 $('reasons').replaceChildren(...reasons.map(v=>node('li',v)));
 $('provider-status').replaceChildren(...report.providers.map(p=>{const r=node('div',undefined,'provider');r.append(node('span',p.provider),node('span',t(p.status==='ok'?'available':p.status==='not_configured'?'notConfigured':'unavailable')+' · '+(p.count||0)));return r;}));
 $('partial').hidden=!report.providers.some(p=>!['ok','not_configured'].includes(p.status));
 $('articles').replaceChildren(...report.articles.map((a,i)=>{
  const row=node('article',undefined,'article-row'),body=node('div'),heading=node('h4');heading.append(articleLink(a,a.title,report.symbol,true));
  body.append(importanceBadge(a));
  body.append(heading,node('p',a.source+' · '+date(a.published_at)+' · '+t(a.category)));
  if(a.summary)body.append(node('p',a.summary));
  const evaluation=report.assessment?.evaluations?.find(e=>e.article_id===a.id);
  if(evaluation)body.append(node('p',t('impact'+evaluation.impact)+': “'+evaluation.evidence_quote+'”','impact-evidence'));
  if(a.coverage?.length>1){const coverage=node('div',undefined,'coverage-links');a.coverage.forEach(s=>coverage.append(link(s.url,s.source),node('span',' ')));body.append(coverage);}
  const score=node('div',new Intl.NumberFormat(lang,{maximumFractionDigits:1}).format(a.score),'article-score');score.append(node('small',t('score')));
  const side=node('div',undefined,'article-aside');side.append(signalBadge(a),score);row.append(node('div',String(i+1).padStart(2,'0'),'article-num'),body,side);return row;
 }));
}
function download(data,name){const url=URL.createObjectURL(new Blob([JSON.stringify(data,null,2)],{type:'application/json'}));const a=node('a');a.href=url;a.download=name;a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);}
function storedPending(){try{return JSON.parse(localStorage.getItem(PENDING_KEY)||'null');}catch{throw failure('storageError');}}
$('buy').addEventListener('click',async()=>{
 if(busyState||pending||newsState!=='available'||!$('asset').value)return;clearError();clearReport();setBusy('preflight');
 try{
  pending=storedPending();if(pending)throw failure('paymentError');
  try{localStorage.setItem('tradingnews.storagecheck','1');localStorage.removeItem('tradingnews.storagecheck');}catch{throw failure('storageError');}
  if(!walletAddress)await connect();
  const symbol=$('asset').value;
  const {data}=await request('/api/web/v1/checkout/'+encodeURIComponent(symbol)+importanceQuery(),{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({address:walletAddress})});
  if(atomicPrice(data.price_usdc)!==config.price_atomic||data.challenge?.resource?.url!==API+'/api/web/v1/market-signal/'+encodeURIComponent(symbol)+importanceQuery())throw failure('configError');
  quote={...data,symbol};renderQuote();$('checkout').showModal();
 }catch(e){if(['noTodayNews','noTodayFiltered'].includes(e.uiKey)){newsState='empty';newsData=null;}else if(e.uiKey==='sourcesError'){newsState='error';newsError='sourcesError';newsData=null;}error(e.uiKey||'walletError');}finally{setBusy();}
});
$('confirm').addEventListener('click',async()=>{
 if(busyState||!quote)return;
 const doPurchase=async lock=>{
  if(!lock){error('pending');return;}
  clearError();setBusy('signing');$('checkout').close();
  try{
   pending=storedPending();if(pending)throw failure('paymentError');
   if(quote.expires_at*1000<=Date.now())throw failure('expired');
   const signature=await (await getWallet()).sign(quote);
   const saved={url:quote.challenge.resource.url,signature,amount_usdc:quote.price_usdc,created_at:new Date().toISOString()};
   try{localStorage.setItem(PENDING_KEY,JSON.stringify(saved));}catch{throw failure('storageError');}
   pending=saved;setBusy('confirming');await resume();
  }catch(e){error(e.uiKey||(pending?'paymentError':'walletError'));}finally{quote=null;setBusy();schedulePaymentCheck();}
 };
 if(navigator.locks)await navigator.locks.request('tradingnews-purchase',{ifAvailable:true},doPurchase);else await doPurchase(true);
});
$('cancel').addEventListener('click',()=>{$('checkout').close();quote=null;});
$('download').addEventListener('click',()=>{if(report)download(report,'tradingnews-'+report.symbol+'.json');});
$('wallet').addEventListener('click',async()=>{if(busyState)return;if(walletAddress){$('wallet-menu').hidden=!$('wallet-menu').hidden;return;}clearError();setBusy('signing');try{await connect();}catch{error('walletError');}finally{setBusy();}});
$('disconnect').addEventListener('click',async()=>{try{await (await getWallet()).disconnect();}finally{walletAddress='';$('wallet-menu').hidden=true;refresh();}});
window.addEventListener('wallet-disconnected',()=>{walletAddress='';refresh();});
window.addEventListener('storage',e=>{if(e.key===PENDING_KEY){pending=storedPending();if(!busyState)setBusy();schedulePaymentCheck();}});
document.addEventListener('visibilitychange',()=>{if(!document.hidden)checkSavedPayment();else{clearTimeout(paymentTimer);paymentTimer=null;}});
$('language').addEventListener('change',()=>{lang=$('language').value;try{localStorage.setItem('tradingnews.language',lang);}catch{}refresh();});
function emailAlertsReady(){return config?.email_alerts_enabled&&config?.alert_importance_enabled===true;}
function alertSymbol(){return $('alert-scope').value==='ALL'?'ALL':$('asset').value;}
function assetText(key){const symbol=alertSymbol();return t(key).replaceAll('{symbol}',symbol==='ALL'?t('historyAllAssets'):symbol).replaceAll('{minutes}',String(config?.alert_interval_minutes||30)).replaceAll('{importance}',$('alert-importance').selectedOptions[0]?.textContent||'');}
// Before a coin is chosen: which coins have news today.
function renderToday(){
 const el=$('news-today'),list=todayNews?.symbols;
 el.hidden=!!$('asset').value||!todayNews;
 el.className=list?list.length?'has-news':'no-news':'';
 el.textContent=!todayNews?'':list?list.length?t('newsToday')+list.join(' · '):t('noNewsAny'):t(todayNews.error||'checkingNews');
}
async function loadToday(){
 if(!todayNews?.symbols)todayNews={};
 renderToday();
 try{
  const {data}=await request('/api/web/v1/news-today');
  // Missing or inconsistent fields are a failed query, never "no news".
  if(!Array.isArray(data.symbols)||data.day_utc!==new Date().toISOString().slice(0,10))throw failure('newsNetworkError');
  todayNews={symbols:data.symbols};
 }catch(e){todayNews={error:e.uiKey==='sourcesError'?'sourcesError':'newsNetworkError'};}
 renderToday();
}
function renderNews(){
 const selected=!!$('asset').value;
 renderToday();
 $('payment-status').hidden=!pending;
 $('payment-status').textContent=pending?t(paymentChecking?'checkingPayment':paymentNotice):'';
 $('buy').hidden=!selected;$('news-status').hidden=!selected;$('latest').hidden=!selected&&!report;
 $('empty').hidden=selected||!!report;
 const message={loading:'checkingNews',available:'newsAvailable',empty:$('importance').value==='all'?'noTodayNews':'noTodayFiltered',error:newsError||'newsNetworkError'}[newsState];
 $('news-status-text').textContent=message?t(message):'';
 $('news-status-text').classList.toggle('news-available',newsState==='available');
 $('news-status').classList.toggle('query-error',newsState==='error');
 $('news-partial').hidden=!newsData?.partial_sources;
 $('news-retry').hidden=!['empty','error'].includes(newsState);$('news-retry').disabled=!!busyState;
 $('alert-form').hidden=!['available','empty'].includes(newsState);
 $('alert-current-option').textContent=$('asset').selectedOptions[0]?.textContent||t('assetPlaceholder');
 $('alert-scope').disabled=alertSending||!selected||!emailAlertsReady();
 $('alert-importance').disabled=alertSending||!selected||!emailAlertsReady();
 $('alert-label').textContent=assetText('alertLabel');
 $('alert-note').textContent=assetText(emailAlertsReady()?'alertNote':'emailNotConfigured');
 $('alert-form').setAttribute('aria-label',t('subscribeTitle'));
 $('alert-form').title=$('alert-note').textContent;
 $('alert-submit').textContent=t(alertSending?'alertSending':'alertButton');
 $('alert-submit').disabled=alertSending||!selected||!emailAlertsReady();
 $('alert-email').disabled=alertSending||!emailAlertsReady();
 $('alert-result').hidden=!alertState;$('alert-result').textContent=alertState?t(alertState):'';
 renderHistory();
}
function renderHistory(){
 $('history-asset').disabled=!config;$('history-importance').disabled=!config;
 $('latest-title').textContent=historySymbol==='ALL'?t('historyAllAssets'):historyData?historyData.name+' / '+historyData.symbol:$('history-asset').selectedOptions[0]?.textContent||'';
 $('latest-checked').textContent=historyData?t('lastChecked')+': '+date(historyData.checked_at):'';
 $('history-all-scope').hidden=historySymbol!=='ALL';
 $('history-partial').hidden=!historyData?.partial_sources;
 $('history-limit').hidden=!historyData?.has_more;
 $('history-retry').hidden=historyState!=='error';
 const articles=historicalArticles();
 $('latest-articles').setAttribute('aria-busy',String(historyState==='loading'));
 $('latest-articles').replaceChildren(...articles.map((a,i)=>{
  const row=node('article',undefined,'article-row preview-row'),body=node('div'),heading=node('h3');heading.append(articleLink(a,a.title,a.symbol));
  body.append(node('span',a.symbol,'history-coin'),importanceBadge(a),heading,node('p',a.source+' · '+date(a.published_at)));row.append(node('span',String(i+1).padStart(2,'0'),'article-num'),body,signalBadge(a));return row;
 }));
 $('latest-empty').hidden=!!articles.length;
 $('latest-empty').textContent=t(historyState==='loading'?'checkingNews':historyState==='error'?(historyError||'newsNetworkError'):'historyEmpty');
}
async function loadHistory(symbol){
 const sequence=++historySequence,importance=$('history-importance').value;
 historySymbol=symbol;historyData=null;historyError='';historyState=symbol?'loading':'idle';
 $('history-asset').value=symbol||'ALL';renderHistory();
 if(!symbol)return;
 try{
  const {data}=await request('/api/web/v1/history?'+new URLSearchParams({symbol,importance}));
  if(sequence!==historySequence)return;
  if(data.symbol!==symbol||data.importance!==importance||!Array.isArray(data.articles))throw failure('newsNetworkError');
  historyData=data;historyState='ready';
 }catch(e){if(sequence!==historySequence)return;historyState='error';historyError=e.uiKey==='sourcesError'?'sourcesError':'newsNetworkError';}
 if(sequence===historySequence)renderHistory();
}
async function selectAsset(symbol,updateHistory=true){
 const sequence=++newsSequence,importance=$('importance').value;
 $('asset').value=symbol;clearReport();clearError();newsData=null;newsError='';alertState='';
 newsState=symbol?'loading':'idle';setBusy(busyState);
 if(updateHistory)loadHistory(symbol);
 if(!symbol)return;
 try{
  const {data}=await request('/api/web/v1/news/'+encodeURIComponent(symbol)+importanceQuery());
  if(sequence!==newsSequence)return;
  if(data.symbol!==symbol||(data.importance||'all')!==importance||!Array.isArray(data.articles)||!['available','no_today_news'].includes(data.status))throw failure('newsNetworkError');
  const available=data.status==='available'&&data.has_today_news===true;
  const empty=data.status==='no_today_news'&&data.has_today_news===false;
  // Missing or inconsistent fields are a failed query, never "no news".
  if(!available&&!empty)throw failure('newsNetworkError');
  if(data.day_utc&&data.day_utc!==new Date().toISOString().slice(0,10))throw failure('newsNetworkError');
  newsData=data;newsState=available?'available':'empty';
  if(available&&todayNews?.symbols&&!todayNews.symbols.includes(symbol))loadToday();
 }catch(e){if(sequence!==newsSequence)return;newsState='error';newsError=e.uiKey==='sourcesError'?'sourcesError':'newsNetworkError';}
 if(sequence===newsSequence)setBusy(busyState);
}
$('asset').addEventListener('change',()=>selectAsset($('asset').value));
$('importance').addEventListener('change',()=>selectAsset($('asset').value,false));
$('history-asset').addEventListener('change',()=>loadHistory($('history-asset').value));
$('history-importance').addEventListener('change',()=>loadHistory($('history-asset').value));
$('history-retry').addEventListener('click',()=>loadHistory($('history-asset').value));
$('alert-scope').addEventListener('change',()=>{alertState='';renderNews();});
$('alert-importance').addEventListener('change',()=>{alertState='';renderNews();});
$('news-retry').addEventListener('click',()=>{if(!busyState)selectAsset($('asset').value);});
$('alert-form').addEventListener('submit',async e=>{
 e.preventDefault();const symbol=alertSymbol(),importance=$('alert-importance').value;
 if(alertSending)return;
 if(!$('asset').value||!['available','empty'].includes(newsState)||!$('alert-email').checkValidity()){alertState='invalidEmail';renderNews();return;}
 if(!emailAlertsReady()){alertState='emailNotConfigured';renderNews();return;}
 alertSending=true;alertState='';renderNews();
 try{
  await request('/api/v1/alerts/subscribe',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({email:$('alert-email').value.trim(),symbol,language:lang,importance})});
  if(alertSymbol()===symbol&&$('alert-importance').value===importance)alertState='alertSent';
 }catch(e){if(alertSymbol()===symbol&&$('alert-importance').value===importance)alertState=['invalidEmail','emailNotConfigured','emailLimit'].includes(e.uiKey)?e.uiKey:'emailUnavailable';}
 finally{alertSending=false;renderNews();}
});
refresh();
(async()=>{
 try{
  const [{data:c},{data:a}]=await Promise.all([request('/api/v1/config'),request('/api/v1/assets')]);
  if(c.api_url!==API||atomicPrice(c.price_usdc)!==c.price_atomic||c.network_caip!==MAINNET||c.asset_id!=='31566704'||c.pay_to!==PAY_TO)throw failure('configError');
  config=c;
  a.assets.forEach(a=>{for(const id of ['asset','history-asset']){const o=node('option',a.symbol+' · '+a.name);o.value=a.symbol;$(id).append(o);}});
  // Always start with an explicit choice, including email links and reloads.
  // Pending recovery uses its own signed URL independently of these filters.
  $('importance').value='all';
  selectAsset('');loadToday();getWallet().catch(()=>{});setBusy();checkSavedPayment();
 }catch(e){error(e.uiKey||'configError');$('availability').textContent=t('unavailable');}
})();
