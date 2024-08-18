import type { Translation } from '../i18n-types';

const it: Translation = {
  LANGUAGE: 'Lingua',
  RETRY: 'Riprovare',
  LOADING: 'Caricamento',
  IS_REQUIRED: '{0} é richiesto',
  SIGN_IN: 'Connettersi',
  SIGN_OUT: 'Disconnettersi',
  USERNAME: 'Nome Utente',
  PASSWORD: 'Password',
  SU_PASSWORD: 'su Password',
  SETTINGS_OF: 'Impostazioni {0}',
  HELP_OF: '{0} Aiuto',
  LOGGED_IN: 'Registrato come {name}',
  PLEASE_SIGNIN: 'Prego registrarsi per continuare',
  UPLOAD_SUCCESSFUL: 'Caricamento finito',
  DOWNLOAD_SUCCESSFUL: 'Scaricamento finito',
  INVALID_LOGIN: 'Dettagli accesso invalidi',
  NETWORK: 'Rete',
  SECURITY: 'Sicurezza',
  ONOFF_CAP: 'ON/OFF',
  ONOFF: 'on/off',
  TYPE: 'Tipo',
  DESCRIPTION: 'Descrizione',
  ENTITIES: 'entità',
  REFRESH: 'Ricaricare',
  EXPORT: 'Esporta',
  DEVICE_DETAILS: 'Dettagli dispositivo',
  ID_OF: '{0} ID',
  DEVICE: 'Dispositivo',
  PRODUCT: 'Prodotto',
  VERSION: 'Versione',
  BRAND: 'Marca',
  ENTITY_NAME: 'Nome Entità',
  VALUE: '{{valore|Valore}}',
  DEVICES: 'Dispositivi',
  SENSORS: 'Sensori',
  RUN_COMMAND: 'Esegui',
  CHANGE_VALUE: 'Cambia Valore',
  CANCEL: 'Annulla',
  RESET: 'Reset',
  APPLY_CHANGES: 'Applica Cambiamenti ({0})',
  UPDATE: 'Update',
  EXECUTE: 'Execute',
  REMOVE: 'Elimina',
  PROBLEM_UPDATING: 'Problema aggiornamento',
  PROBLEM_LOADING: 'Problema caricamento',
  ANALOG_SENSOR: 'Sensore Analogico',
  ANALOG_SENSORS: 'Sensori Analogici',
  SETTINGS: 'Settings',
  UPDATED_OF: '{0} Aggiornati',
  UPDATE_OF: 'Aggiorna {0}',
  REMOVED_OF: '{0} Rimossi',
  DELETION_OF: '{0} Cancellati',
  OFFSET: 'Offset',
  FACTOR: 'Fattore',
  FREQ: 'Frequenza',
  DUTY_CYCLE: 'Ciclo di lavoro',
  UNIT: 'UoM',
  STARTVALUE: 'Valore di partenza',
  WARN_GPIO: 'Avvertimento: prestare attenzione quando si assegna un GPIO!',
  EDIT: 'Modifica',
  SENSOR: 'Sensore',
  TEMP_SENSOR: 'Sensore Temperatura',
  TEMP_SENSORS: 'Sensori Temperatura',
  WRITE_CMD_SENT: 'Scrittura comando inviata',
  EMS_BUS_WARNING: 'EMS bus disconnesso. Se questo avvertimento persiste dopo alcuni secondi prego verificare impostazioni scheda',
  EMS_BUS_SCANNING: 'Scansione dispositivi EMS ...',
  CONNECTED: 'Connesso',
  TX_ISSUES: 'Problema di Tx - prova una modalità differente',
  DISCONNECTED: 'Disconnesso',
  EMS_SCAN: 'Sei sicuro di voler iniziare una scansione completa del bus EMS ?',
  DATA_TRAFFIC: 'Data Traffic', // TODO Translate
  EMS_DEVICE: 'Dispositivo EMS ',
  SUCCESS: 'SUCCESSO',
  FAIL: 'FALLITO',
  QUALITY: 'QUALITÂ',
  SCAN: 'Scansione',
  STATUS_NAMES: [
    'Telegrammi EMS Ricevuti (Rx)',
    'EMS Letti (Tx)',
    'EMS Scritti (Tx)',
    'Letture Sensori Temperatura',
    'Letture Sensori Analogici',
    'Pubblicazioni MQTT',
    'Chiamate API',
    'Messaggi Syslog'
  ],
  NUM_DAYS: '{num} giorni {{s}}',
  NUM_SECONDS: '{num} secondi {{s}}',
  NUM_HOURS: '{num} ore {{s}}',
  NUM_MINUTES: '{num} minuti {{s}}',
  APPLICATION: 'Applicazione',
  CUSTOMIZATIONS: 'Personalizzazione',
  APPLICATION_RESTARTING: 'EMS-ESP sta riavviando',
  BOARD_PROFILE: 'Profilo Scheda',
  CUSTOM: 'Personalizzazione',
  GPIO_OF: 'GPIO {0}',
  BUTTON: 'Pulsante',
  TEMPERATURE: 'Temperatura',
  PHY_TYPE: 'Eth PHY Type',
  DISABLED: 'disattivato',
  TX_MODE: 'EMS Modo Tx ',
  HARDWARE: 'Hardware',
  EMS_BUS: '{{BUS|EMS BUS}}',
  GENERAL_OPTIONS: 'Opzioni Generali',
  LANGUAGE_ENTITIES: 'Lingua (per entità dispositivi)',
  HIDE_LED: 'Nascondi LED',
  ENABLE_TELNET: 'Abilità la Console Telnet',
  ENABLE_ANALOG: 'Abilita Sensori Analogici',
  CONVERT_FAHRENHEIT: 'Converti valori temperatura in Fahrenheit',
  BYPASS_TOKEN: 'Ignora autorizzazione del token di accesso sulle chiamate API',
  READONLY: 'Abilita modalità sola-lettura (blocca tutti i comandi di scrittura EMS Tx in uscita)',
  UNDERCLOCK_CPU: 'Abbassa velocità della CPU',
  REMOTE_TIMEOUT: 'Remote timeout',
  REMOTE_TIMEOUT_EN: 'Disable remote on missing roomtemperature',
  HEATINGOFF: 'Avviamento caldaia con riscaldamento forzato spento',
  MIN_DURATION: 'Wait time',
  ENABLE_SHOWER_TIMER: 'Abilita timer doccia',
  ENABLE_SHOWER_ALERT: 'Abilita avviso doccia',
  TRIGGER_TIME: 'Tempo di avvio',
  COLD_SHOT_DURATION: 'Durata colpo freddo',
  FORMATTING_OPTIONS: 'Opzioni di formattazione',
  BOOLEAN_FORMAT_DASHBOARD: 'Pannello di controllo in formato booleano',
  BOOLEAN_FORMAT_API: 'Formato booleano API/MQTT',
  ENUM_FORMAT: 'Enum Format API/MQTT',
  INDEX: 'Indice',
  ENABLE_PARASITE: 'Abilita potenza 1-wire parassita',
  LOGGING: 'Registrazione',
  LOG_HEX: 'Registra telegrammi EMS in esadecimale',
  ENABLE_SYSLOG: 'Abilita Syslog',
  LOG_LEVEL: 'Livello registrazione',
  MARK_INTERVAL: 'Segna Intervallo',
  SECONDS: 'secondi',
  MINUTES: 'minuti',
  HOURS: 'ore',
  RESTART: 'Riavvia',
  RESTART_TEXT: 'EMS-ESP necessita di essere riavviato per applicare il cambio impostazioni del sistema',
  RESTART_CONFIRM: 'Sei sicuro di voler riavviare EMS-ESP?',
  COMMAND: 'Comando',
  CUSTOMIZATIONS_RESTART: 'Tutte le personalizzazioni sono state rimosse. Riavvio ...',
  CUSTOMIZATIONS_FULL: 'Le entità selezionate hanno superato il limite. Si prega di salvare in batch',
  CUSTOMIZATIONS_SAVED: 'Personalizzazioni salvate',
  CUSTOMIZATIONS_HELP_1: 'Seleziona un dispositivo e personalizza le opzioni delle entità o fai clic per rinominarlo',
  CUSTOMIZATIONS_HELP_2: 'seleziona come preferito',
  CUSTOMIZATIONS_HELP_3: 'disabilita azione scrittura',
  CUSTOMIZATIONS_HELP_4: 'esculdi da MQTT e API',
  CUSTOMIZATIONS_HELP_5: 'nascondi dal Pannello di controllo',
  CUSTOMIZATIONS_HELP_6: 'rimuovi dalla memoria',
  SELECT_DEVICE: 'Seleziona un dispositivo',
  SET_ALL: 'imposta tutto',
  OPTIONS: 'Opzioni',
  NAME: 'Nome',
  CUSTOMIZATIONS_RESET: 'Sei sicuro di voler rimuovere tutte le personalizzazioni incluse le impostazioni personalizzate dei sensori di temperatura e analogici?',
  SUPPORT_INFORMATION: 'Informazioni di Supporto',
  HELP_INFORMATION_1: 'Visita il wiki online per ottenere istruzioni su come configurare EMS-ESP',
  HELP_INFORMATION_2: 'Per la chat della community dal vivo unisciti al nostro server Discord',
  HELP_INFORMATION_3: 'Per richiedere una funzionalità o segnalare un errore',
  HELP_INFORMATION_4: 'Ricordati di scaricare e allegare le informazioni del tuo sistema per una risposta più rapida quando segnali un problema',
  HELP_INFORMATION_5: 'EMS-ESP è un progetto gratuito e open-source. Supporta il suo sviluppo futuro assegnandogli una stella su GitHub!',
  UPLOAD: 'Carica',
  DOWNLOAD: 'Scarica',
  ABORTED: 'Annullato',
  FAILED: 'Fallito',
  SUCCESSFUL: 'Riuscito',
  SYSTEM: 'Sistema',
  LOG_OF: 'Registro {0}',
  STATUS_OF: 'Stato {0}',
  DOWNLOAD_UPLOAD: 'Scaricamento/Caricamento',
  VERSION_ON: 'Attualmente stai eseguendo la versione',
  CLOSE: 'Chiudere',
  USE: 'Usa',
  FACTORY_RESET: 'Impostazioni di fabbrica',
  SYSTEM_FACTORY_TEXT: 'Il dispositivo è stato ripristinato alle impostazioni di fabbrica e ora verrà riavviato',
  SYSTEM_FACTORY_TEXT_DIALOG: 'Sei sicuro di voler ripristinare il dispositivo alle impostazioni di fabbrica??',
  THE_LATEST: 'Ultima',
  OFFICIAL: 'ufficiale',
  DEVELOPMENT: 'sviluppo',
  RELEASE_IS: 'rilascio é',
  RELEASE_NOTES: 'note rilascio',
  EMS_ESP_VER: 'Versione EMS-ESP',
  UPTIME: 'Tempo di attività del sistema',
  FREE_MEMORY: 'Free Memory',
  PSRAM: 'PSRAM (Size / Free)',
  FLASH: 'Flash Chip (Size , Speed)',
  APPSIZE: 'Applicazione (Partizione: Usata / Libera)',
  FILESYSTEM: 'Memoria Sistema (Usata / Libera)',
  BUFFER_SIZE: 'Max Buffer Size',
  COMPACT: 'Compact',
  DOWNLOAD_CUSTOMIZATION_TEXT: 'Scarica personalizzazioni entità',
  DOWNLOAD_SCHEDULE_TEXT: 'Download Scheduler Events',
  DOWNLOAD_SETTINGS_TEXT: 'Scarica le impostazioni dell applicazione. Fai attenzione quando condividi le tue impostazioni poiché questo file contiene password e altre informazioni di sistema riservate',
  UPLOAD_TEXT: 'Carica un nuovo file firmware (.bin) , file delle impostazioni o delle personalizzazioni (.json) di seguito, per un opzione di convalida scaricare dapprima un file "*.MD5" ',
  UPLOAD_DROP_TEXT: 'Trascina il file o clicca qui',
  ERROR: 'Errore Inaspettato, prego tenta ancora',
  TIME_SET: 'Imposta Ora',
  MANAGE_USERS: 'Gestione Utenti',
  IS_ADMIN: 'Amministratore',
  USER_WARNING: 'Devi avere configurato almeno un utente amministratore',
  ADD: 'Aggiungi',
  ACCESS_TOKEN_FOR: 'Token di accesso per',
  ACCESS_TOKEN_TEXT: 'Il token seguente viene utilizzato con le chiamate API REST che richiedono l autorizzazione. Può essere passato come token Bearer nell intestazione di autorizzazione o nel parametro di query URL access_token.',
  GENERATING_TOKEN: 'Generazione token',
  USER: 'Utente',
  MODIFY: 'Modifica',
  SU_TEXT: 'La password su (super utente) viene utilizzata per firmare i token di autenticazione e abilitare anche i privilegi di amministratore all interno della console.',
  NOT_ENABLED: 'Non abilitato',
  ERRORS_OF: 'Errori {0}',
  DISCONNECT_REASON: 'Motivo disconnessione',
  ENABLE_MQTT: 'Abilita MQTT',
  BROKER: 'Broker',
  CLIENT: 'Cliente',
  BASE_TOPIC: 'Base',
  OPTIONAL: 'opzionale',
  FORMATTING: 'Formattazione',
  MQTT_FORMAT: 'Formato Topic/Payload ',
  MQTT_NEST_1: 'Inserito in un singolo argomento',
  MQTT_NEST_2: 'Come argomenti individuali',
  MQTT_RESPONSE: 'Pubblica uscita del comando in un argomento di risposta',
  MQTT_PUBLISH_TEXT_1: 'Pubblica argomenti a valore singolo sul cambiamento',
  MQTT_PUBLISH_TEXT_2: 'Pubblica per comandare gli argomenti (ioBroker)',
  MQTT_PUBLISH_TEXT_3: 'Abilita rilevamento MQTT (Home Assistant, Domoticz)',
  MQTT_PUBLISH_TEXT_4: 'Prefisso per gli argomenti di scoperta',
  MQTT_PUBLISH_TEXT_5: 'Discovery type',
  MQTT_PUBLISH_INTERVALS: 'Pubblica intervalli',
  MQTT_INT_BOILER: 'Caldaie e Pompe di Calore',
  MQTT_INT_THERMOSTATS: 'Termostati',
  MQTT_INT_SOLAR: 'Moduli solari',
  MQTT_INT_MIXER: 'Moduli Mixer',
  MQTT_INT_WATER: 'Moduli Acqua',
  MQTT_QUEUE: 'Coda MQTT',
  DEFAULT: 'Predefinito',
  MQTT_ENTITY_FORMAT: 'Formato ID entità',
  MQTT_ENTITY_FORMAT_0: 'Singola istanza, nome lungo (v3.4)',
  MQTT_ENTITY_FORMAT_1: 'Sinola istanza, nome breve',
  MQTT_ENTITY_FORMAT_2: 'Istanze multiple, nome breve',
  MQTT_CLEAN_SESSION: 'Imposta sessione pulita',
  MQTT_RETAIN_FLAG: 'Imposta sempre il flag Retain',
  INACTIVE: 'Inattivo',
  ACTIVE: 'Attivo',
  UNKNOWN: 'Sconosciuto',
  SET_TIME: 'Imposta ora',
  SET_TIME_TEXT: 'Immettere la data e l ora locale di seguito per impostare l ora',
  LOCAL_TIME: 'Ora locale',
  UTC_TIME: 'Ora UTC',
  ENABLE_NTP: 'Abilita NTP',
  NTP_SERVER: 'Server NTP',
  TIME_ZONE: 'Fuso orario',
  ACCESS_POINT: 'Access Point',
  AP_PROVIDE: 'Abilita Access Point',
  AP_PROVIDE_TEXT_1: 'sempre',
  AP_PROVIDE_TEXT_2: 'quando WiFi é disconnessa',
  AP_PROVIDE_TEXT_3: 'mai',
  AP_PREFERRED_CHANNEL: 'Canale preferito',
  AP_HIDE_SSID: 'Nascondi SSID',
  AP_CLIENTS: 'Clienti AP',
  AP_MAX_CLIENTS: 'Clienti Massimi',
  AP_LOCAL_IP: 'IP Locale',
  NETWORK_SCAN: 'Scansione reti WiFi',
  IDLE: 'Inattivo',
  LOST: 'Perso',
  SCANNING: 'Scansione',
  SCAN_AGAIN: 'Scansiona ancora',
  NETWORK_SCANNER: 'Scansione Rete',
  NETWORK_NO_WIFI: 'Nessuana rete WiFi trovata',
  NETWORK_BLANK_SSID: 'lasciare vuoto per disattivare WiFi',
  NETWORK_BLANK_BSSID: 'leave blank to use only SSID', // TODO translate
  TX_POWER: 'Potenza Tx',
  HOSTNAME: 'Nome ospite',
  NETWORK_DISABLE_SLEEP: 'Disabilita la modalità sospensione Wi-Fi',
  NETWORK_LOW_BAND: 'Usa una larghezza di banda WiFi inferiore',
  NETWORK_USE_DNS: 'Abilita servizio mDNS',
  NETWORK_ENABLE_CORS: 'Abilita CORS',
  NETWORK_CORS_ORIGIN: 'origine CORS',
  NETWORK_FIXED_IP: 'Usa indirizzo IP fisso',
  NETWORK_GATEWAY: 'Gateway',
  NETWORK_SUBNET: 'Maschera Sottorete',
  NETWORK_DNS: 'Server DNS',
  ADDRESS_OF: 'Indirizzo {0}',
  ADMINISTRATOR: 'Amministratore',
  GUEST: 'Ospite',
  NEW: 'Nuovo',
  NEW_NAME_OF: 'Nuovo nome {0}',
  ENTITY: 'entità',
  MIN: 'min',
  MAX: 'max',
  BLOCK_NAVIGATE_1: 'Hai modifiche non salvate',
  BLOCK_NAVIGATE_2: 'Se passi a una pagina diversa, le modifiche non salvate andranno perse. Sei sicuro di voler lasciare questa pagina?',
  STAY: 'Stai',
  LEAVE: 'Esci',
  SCHEDULER: 'Programma eventi',
  SCHEDULER_HELP_1: "Automatizza i comandi aggiungendo gli eventi programmati di seguito. Imposta un nome univoco per abilitare/disabilitare l'attivazione tramite API/MQTT.",
  SCHEDULER_HELP_2: "per attivare una volta all'avvio",
  SCHEDULE: 'Programma',
  TIME: 'Ora',
  TIMER: 'Orologio',
  ONCHANGE: 'Sul cambiamento', // TODO translate
  CONDITION: 'Condizione', // TODO translate
  IMMEDIATE: 'Immediata', // TODO translate
  SCHEDULE_UPDATED: 'Calendario aggiornato',
  SCHEDULE_TIMER_1: 'All avvio',
  SCHEDULE_TIMER_2: 'Ogni minuto',
  SCHEDULE_TIMER_3: 'Ogni ora',
  CUSTOM_ENTITIES: 'Entità personalizzate',
  ENTITIES_HELP_1: 'Recupera entità personalizzate dal BUS EMS', // TODO translate
  ENTITIES_UPDATED: 'Entità aggiornate',
  WRITEABLE: 'Scrivibile',
  SHOWING: 'Visualizza',
  SEARCH: 'Ricerca',
  CERT: 'TLS root certificate (leave blank for insecure)', // TODO translate
  ENABLE_TLS: 'Abilita TLS',
  ON: 'On', // TODO translate
  OFF: 'Off', // TODO translate
  POLARITY: 'Polarity', // TODO translate
  ACTIVEHIGH: 'Active High', // TODO translate
  ACTIVELOW: 'Active Low', // TODO translate
  UNCHANGED: 'Unchanged', // TODO translate
  ALWAYS: 'Always', // TODO translate
  ACTIVITY: 'Activity', // TODO translate
  CONFIGURE: 'Configure {0}', // TODO translate
  SYSTEM_MEMORY: 'System Memory', // TODO translate
  APPLICATION_SETTINGS_1: 'Modify EMS-ESP Application Settings', // TODO translate
  SECURITY_1: 'Add or remove users', // TODO translate
  DOWNLOAD_UPLOAD_1: 'Download and Upload Settings and Firmware', // TODO translate
  MODULES: 'Module', // TODO translate
  MODULES_1: 'Attiva o disattiva i moduli esterni', // TODO translate
  MODULES_UPDATED: 'Modules updated', // TODO translate
  MODULES_DESCRIPTION: 'Click on the Module to activate or de-activate EMS-ESP library modules', // TODO translate
  MODULES_NONE: 'No external modules detected', // TODO translate
  RENAME: 'Rename', // TODO translate  
  ENABLE_MODBUS: 'Abilita Modbus',
  VIEW_LOG: 'View log to diagnose issues', // TODO translate
  UPLOAD_DRAG: 'drag and drop a file here or click to select one', // TODO translate
  SERVICES: 'Services', // TODO translate
  ALLVALUES: 'All Values', // TODO translate
  SPECIAL_FUNCTIONS: 'Special Functions' // TODO translate
};

export default it;
