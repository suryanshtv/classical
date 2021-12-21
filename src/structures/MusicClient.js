/**
 * Importing modules
 */
const { Client, Intents, Collection, MessageEmbed, MessageButton, MessageSelectMenu } = require("discord.js");
const { LavasfyClient } = require("lavasfy");
const erela  = require("erela.js");
const { readdirSync } = require("fs");
const { path } = require("path");
const deezer = require("erela.js-deezer");
const apple = require("erela.js-apple");
const facebook = require("erela.js-facebook");
const mongoose = require('mongoose');

/**
 * Importing custom modules
 */
require('./BasePlayer')


/**
 * Class constructor
 */
class musicClient extends Client {
    constructor() {
        super({
            shards: "auto",
            allowedMentions: {
                everyone: false
            },
            intents: [
                Intents.FLAGS.GUILDS,
                Intents.FLAGS.GUILD_MESSAGES,
                Intents.FLAGS.GUILD_VOICE_STATES
            ]
        });

        this.commands = new Collection();
        this.slashCommands = new Collection();
        this.config = require("../config/config");
        this.owner = this.config.ownerID;
        this.prefix = this.config.prefix;
        this.version = this.config.version;
        this.embedColor = this.config.embedColor;
        this.aliases = new Collection();
        this.logger = require("../utils/logger.js");
        this.emoji = require("../utils/emoji.json");
        if (!this.token) this.token = this.config.token;

        /**
         * Setting up the database
         */
        const dbOptions = {
            useNewUrlParser: true,
            useUnifiedTopology: true
        };
        mongoose.connect(this.config.db, dbOptions);
        mongoose.Promise = global.Promise;
        mongoose.connection.on('connected', () => {
            console.log(`Connected to the database.`);
        });
        mongoose.connection.on('disconnected', () => {
            console.log(`Disconnected from the database`);
        });
        mongoose.connection.on('err', (err) => {
            console.log(`Errors in Connections/Database: \n ${err.stack}`);
        });

        /**
         * Error Handler
         */
        this.on("disconnect", () => console.log("Bot is disconnecting..."))
        this.on("reconnecting", () => console.log("Bot reconnecting..."))
        this.on('warn', error => console.log(error));
        this.on('error', error => console.log(error));
        process.on('unhandledRejection', error => console.log(error));
        process.on('uncaughtException', error => console.log(error));
        /**
         * Setting up the erela Client
         */
        const client = this;
        this.Lavasfy = new LavasfyClient({
            clientID: this.config.SpotifyID,
            clientSecret: this.config.SpotifySecret,
            playlistLoadLimit: 5,
            filterAudioOnlyResult: true,
            autoResolve: true,
            useSpotifyMetadata: true,
        },
            [{
                id: this.config.nodes.id,
                host: this.config.nodes.host,
                port: this.config.nodes.port,
                password: this.config.nodes.password,
                secure: this.config.nodes.secure,
            },
            ]);

        this.manager = new erela.Manager({
            plugins: [
                new deezer(),
                new apple(),
                new facebook(),
            ],
            nodes: [
                {
                    identifier: this.config.nodes.id,
                    host: this.config.nodes.host,
                    port: this.config.nodes.port,
                    password: this.config.nodes.password,
                    secure: this.config.nodes.secure,
                },
            ],
            send(id, payload) {
                const guild = client.guilds.cache.get(id);
                if (guild) guild.shard.send(payload);
            },
        })

        /*
         * Client Events
         */
        readdirSync("./src/events/Client/").forEach(file => {
            const eventName = file.split(".")[0];
            const event = require(`../events/Client/${file}`);
            this.on(eventName, event.bind(null, this));
        });
        /*
         * erela Events
         */
        readdirSync("./src/events/erela-lava/").forEach(file => {
            const eventName = file.split(".")[0];
            const event = require(`../events/erela-lava/${file}`);
            client.manager.on(eventName, event.bind(null, client));
        });
        /*
         * Command Events
         */
        readdirSync("./src/commands/").forEach(dir => {
            const commandFiles = readdirSync(`./src/commands/${dir}/`).filter(f => f.endsWith('.js'));
            for (const file of commandFiles) {
                const command = require(`../commands/${dir}/${file}`);
                this.logger.log(`Loading ${command.category} commands ${command.name}`, "cmd");
                this.commands.set(command.name, command);
            }
        });
        /*
         * Slash Command Events
         */
        const data = [];

        readdirSync("./src/slashcommands/").forEach((dir) => {
            const slashCommandFile = readdirSync(`./src/slashcommands/${dir}/`).filter((files) => files.endsWith(".js"));

            for (const file of slashCommandFile) {
                const slashCommand = require(`../slashcommands/${dir}/${file}`);

                if(!slashCommand.name) return console.error(`slashCommandNameError: ${slashCommand.split(".")[0]} application command name is required.`);

                if(!slashCommand.description) return console.error(`slashCommandDescriptionError: ${slashCommand.split(".")[0]} application command description is required.`);

                this.slashCommands.set(slashCommand.name, slashCommand);
                this.logger.log(`Client SlashCommands Command (/) Loaded: ${slashCommand.name}`, "cmd");
                data.push(slashCommand);
            }
        });
        this.on("ready", async () => {
            await this.application.commands.set(data).then(() => this.logger.log(`Client Application (/) Registered.`, "cmd")).catch((e) => console.log(e));
        });
    }
    connect() {
        return super.login(this.token);
    };
}
module.exports = musicClient;