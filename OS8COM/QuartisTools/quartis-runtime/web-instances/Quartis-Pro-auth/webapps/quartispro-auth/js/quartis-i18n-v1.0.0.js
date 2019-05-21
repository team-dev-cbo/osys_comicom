var $i18n = {
    lang: undefined,
    en: {
        'login.connecting': 'Connecting...',
        'login.connected': 'Connected to QuartisServer.',
        'login.not_connected': 'Unable to connect to QuartisServer.',
        'form.preferences': 'Preferences',
        'form.button.validate': 'Validate',
        'form.button.save': 'Save',
        'form.button.cancel': 'Cancel',
        'form.info.parameters_saved': 'Parameters saved successfully.',
        'form.error.parameters_not_saved': 'Unable to save parameters.',
        'status.0': 'Authentification needed.',
        'status.100': 'Authentification succeded.',
        'status.101': 'Authentification failed.',
        'status.200': 'Connected to QuartisTools.',
        'status.201': 'Already connected to QuartisTools.',
        'status.202': 'Unable to connect to QuartisTools.',
        'status.500': 'INTERNAL ERROR: Please contact your administrator.',
    },
    fr: {
        'login.connecting': 'Connexion...',
        'login.connected': 'Connecté à QuartisServer.',
        'login.not_connected': 'Impossible de se Connecter à QuartisServer.',
        'form.preferences': 'Préférences',
        'form.button.validate': 'Valider',
        'form.button.save': 'Sauvegarder',
        'form.button.cancel': 'Annuler',
        'form.info.parameters_saved': 'Paramètres sauvegardés.',
        'form.error.parameters_not_saved': 'Impossible de sauvegarder les paramètres.',
        'status.0': 'Authentification nécessaire.',
        'status.100': 'Authentification réussie.',
        'status.101': 'L\'authentification a échouée.',
        'status.200': 'Connecté à QuartisTools.',
        'status.201': 'Déjà connecté à QuartisTools.',
        'status.202': 'Impossible de se connecter à QuartisTools.',
        'status.500': 'ERREUR INTERNE: Veuillez contacter votre administrateur.',
    },
};

$i18n.get = function (key) {
    var lang = $i18n.lang;
    if (lang === undefined) {
        lang = (navigator.language || navigator.userLanguage).split("-")[0];
    }
    var langs = $i18n[lang];
    if (langs === undefined) {
        langs = $i18n['en'];
    }
    var result = langs[key];
    return result !== undefined ? result : key;
};