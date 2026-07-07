import "@servicenow/sdk/global";

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                        "cs0": {
                            "table": "sys_script_client",
                            "id": "067e134012d744a8b58e5a9f8aa91018"
                        },
                        "src_server_script_ts": {
                            "table": "sys_module",
                            "id": "03681393fc504017b25efb2caa554d79"
                        },
                        "br0": {
                            "table": "sys_script",
                            "id": "de60e9ee5c30499e99c51e10425f7e9f"
                        },
                        "package_json": {
                            "table": "sys_module",
                            "id": "11c49ae08e4b4806a0371a6ef04a6d69"
                        }
                    };
                composite: [
                        {
                            "table": "sys_module",
                            "id": "8a10134079cc496899ada99c952a039a",
                            "key": {
                                "module": "lodash.snakecase@4.1.1",
                                "file": "index.js"
                            }
                        },
                        {
                            "table": "sys_module",
                            "id": "9dfe06b0e9c74a8b9b38bdb1f990a716",
                            "key": {
                                "module": "lodash.snakecase@4.1.1",
                                "file": "cyclonedx/bom.json"
                            }
                        },
                        {
                            "table": "sys_module",
                            "id": "102a5b5149f440d4a1efd7d308bf80e7",
                            "key": {
                                "module": "lodash.snakecase@4.1.1",
                                "file": "package.json"
                            }
                        }
                    ];
            }
        }
    }
}
