(function() {
    window.optimizely = window.optimizely || [];
    window.optimizely.push({
        type: "load",
        data: {
            "accountId": "26099350705",
            "namespace": "5955517055500288",
            "revision": "89",
            "anonymizeIP": true,
            "enableForceParameters": true,
            "experimental": {
                "trimPages": true
            },
            "projectId": "5955517055500288",
            "layers": [{
                "changes": null,
                "id": "4703642184318976",
                "name": "Concluded MAB - Impression",
                "commitId": null,
                "groupId": null,
                "holdback": null,
                "activation": {},
                "integrationSettings": {},
                "integrationStringVersion": 2,
                "experiments": [{
                    "audienceIds": null,
                    "audienceName": "Everyone else",
                    "changes": null,
                    "id": "6338913267089408",
                    "integrationSettings": null,
                    "variations": [{
                        "id": "5321521414012928",
                        "name": "Original",
                        "actions": [{
                            "viewId": "6590806790766592",
                            "changes": [{
                                "attributes": {
                                    "html": "yes"
                                },
                                "css": {},
                                "selector": "tr:nth-of-type(9) > td:nth-of-type(2)",
                                "type": "attribute",
                                "id": "4fa8ae37-6b1d-4855-bff7-cdb6a81ab46c",
                                "dependencies": []
                            }]
                        }]
                    }, {
                        "id": "4807402168516608",
                        "name": "Variation #1",
                        "actions": [{
                            "viewId": "6590806790766592",
                            "changes": [{
                                "attributes": {
                                    "html": "yes"
                                },
                                "css": {},
                                "selector": "tr:nth-of-type(9) > td:nth-of-type(3)",
                                "type": "attribute",
                                "id": "7fed11ae-e91d-4c87-9698-0c6bd419c4ea",
                                "dependencies": []
                            }]
                        }]
                    }, {
                        "id": "6322073723731968",
                        "name": "Variation #2",
                        "actions": [{
                            "viewId": "6590806790766592",
                            "changes": [{
                                "attributes": {
                                    "html": "yes"
                                },
                                "css": {},
                                "selector": "tr:nth-of-type(9) > td:nth-of-type(4)",
                                "type": "attribute",
                                "id": "ab3e2407-0b92-49a7-a0e8-7f39db112fd1",
                                "dependencies": []
                            }]
                        }]
                    }, {
                        "id": "5213013360246784",
                        "name": "Variation #3",
                        "actions": [{
                            "viewId": "6590806790766592",
                            "changes": [{
                                "attributes": {
                                    "html": "yes"
                                },
                                "css": {},
                                "selector": "tr:nth-of-type(9) > td:nth-of-type(5)",
                                "type": "attribute",
                                "id": "7195d424-b1b3-481b-8af9-d25110575e2e",
                                "dependencies": []
                            }]
                        }]
                    }],
                    "weightDistributions": [{
                        "entityId": "5321521414012928",
                        "endOfRange": 2500
                    }, {
                        "entityId": "4807402168516608",
                        "endOfRange": 5000
                    }, {
                        "entityId": "6322073723731968",
                        "endOfRange": 7500
                    }, {
                        "entityId": "5213013360246784",
                        "endOfRange": 10000
                    }],
                    "name": "Concluded MAB - Impression",
                    "bucketingStrategy": null,
                    "experimentMetadata": {
                        "allocationPolicy": "manual",
                        "layerId": "4703642184318976"
                    },
                    "deployed": false
                }],
                "policy": "single_experiment",
                "viewIds": ["6590806790766592"],
                "weightDistributions": null,
                "decisionMetadata": {
                    "experimentPriorities": [[{
                        "entityId": "6338913267089408",
                        "endOfRange": null
                    }]],
                    "experimentWeights": null,
                    "offerConsistency": null
                },
                "concluded": true
            }, {
                "changes": null,
                "id": "4773961351823360",
                "name": "Deployed MAB - Impression",
                "commitId": null,
                "groupId": null,
                "holdback": 0,
                "activation": {},
                "integrationSettings": {},
                "integrationStringVersion": 2,
                "experiments": [{
                    "audienceIds": null,
                    "audienceName": "Everyone else",
                    "changes": null,
                    "id": "5403254373220352",
                    "integrationSettings": null,
                    "variations": [{
                        "id": "6496808210268160",
                        "name": "Original",
                        "actions": [{
                            "viewId": "6590806790766592",
                            "changes": [{
                                "attributes": {
                                    "html": "yes"
                                },
                                "css": {},
                                "selector": "tr:nth-of-type(10) > td:nth-of-type(2)",
                                "type": "attribute",
                                "id": "3fe6ea37-49f3-4167-8834-37fcddde3098",
                                "dependencies": []
                            }]
                        }]
                    }, {
                        "id": "5966204326641664",
                        "name": "Variation #1",
                        "actions": [{
                            "viewId": "6590806790766592",
                            "changes": [{
                                "attributes": {
                                    "html": "yes"
                                },
                                "css": {},
                                "selector": "tr:nth-of-type(10) > td:nth-of-type(3)",
                                "type": "attribute",
                                "id": "a323b939-79ed-4fa0-9139-c44b3f0b0005",
                                "dependencies": []
                            }]
                        }]
                    }, {
                        "id": "6366187651596288",
                        "name": "Variation #2",
                        "actions": [{
                            "viewId": "6590806790766592",
                            "changes": [{
                                "attributes": {
                                    "html": "yes"
                                },
                                "css": {},
                                "selector": "tr:nth-of-type(10) > td:nth-of-type(4)",
                                "type": "attribute",
                                "id": "4550a0c0-9032-4d0e-af9e-9373ad31bbd4",
                                "dependencies": []
                            }]
                        }]
                    }, {
                        "id": "6511524244619264",
                        "name": "Variation #3",
                        "actions": [{
                            "viewId": "6590806790766592",
                            "changes": [{
                                "attributes": {
                                    "html": "yes"
                                },
                                "css": {},
                                "selector": "tr:nth-of-type(10) > td:nth-of-type(5)",
                                "type": "attribute",
                                "id": "81fd144d-ccf2-4e2d-877b-23f5ed4dc0d4",
                                "dependencies": []
                            }]
                        }]
                    }],
                    "weightDistributions": [{
                        "entityId": "6496808210268160",
                        "endOfRange": 10000
                    }],
                    "name": "Deployed MAB - Impression",
                    "bucketingStrategy": null,
                    "experimentMetadata": {
                        "allocationPolicy": "manual",
                        "layerId": "4773961351823360"
                    },
                    "deployed": true
                }],
                "policy": "single_experiment",
                "viewIds": ["6590806790766592"],
                "weightDistributions": null,
                "decisionMetadata": {
                    "experimentPriorities": [],
                    "experimentWeights": null,
                    "offerConsistency": null
                },
                "concluded": true
            }, {
                "changes": null,
                "id": "4965819151548416",
                "name": "Concluded AB - Impression",
                "commitId": null,
                "groupId": null,
                "holdback": null,
                "activation": {},
                "integrationSettings": {},
                "integrationStringVersion": 2,
                "experiments": [{
                    "audienceIds": null,
                    "audienceName": "Everyone else",
                    "changes": null,
                    "id": "5261820647178240",
                    "integrationSettings": null,
                    "variations": [{
                        "id": "6466404354883584",
                        "name": "Original",
                        "actions": [{
                            "viewId": "6590806790766592",
                            "changes": [{
                                "attributes": {
                                    "html": "yes"
                                },
                                "css": {},
                                "selector": "tr:nth-of-type(4) > td:nth-of-type(2)",
                                "type": "attribute",
                                "id": "2632beb3-b831-44e7-a68e-ecdcb3604bfd",
                                "dependencies": []
                            }]
                        }]
                    }, {
                        "id": "5059029471330304",
                        "name": "Variation #1",
                        "actions": [{
                            "viewId": "6590806790766592",
                            "changes": [{
                                "attributes": {
                                    "html": "yes"
                                },
                                "css": {},
                                "selector": "tr:nth-of-type(4) > td:nth-of-type(3)",
                                "type": "attribute",
                                "id": "600db865-7566-433b-9ca9-5f3d32f35196",
                                "dependencies": []
                            }]
                        }]
                    }, {
                        "id": "6373990801866752",
                        "name": "Variation #2",
                        "actions": [{
                            "viewId": "6590806790766592",
                            "changes": [{
                                "attributes": {
                                    "html": "yes"
                                },
                                "css": {},
                                "selector": "tr:nth-of-type(4) > td:nth-of-type(4)",
                                "type": "attribute",
                                "id": "f1c09dee-6e54-4f12-9d16-7b802753007b",
                                "dependencies": []
                            }]
                        }]
                    }, {
                        "id": "5824770600599552",
                        "name": "Variation #3",
                        "actions": [{
                            "viewId": "6590806790766592",
                            "changes": [{
                                "attributes": {
                                    "html": "yes"
                                },
                                "css": {},
                                "selector": "tr:nth-of-type(4) > td:nth-of-type(5)",
                                "type": "attribute",
                                "id": "1e82c43a-3c8f-4f9b-b98e-34ec79093c19",
                                "dependencies": []
                            }]
                        }]
                    }],
                    "weightDistributions": [{
                        "entityId": "6466404354883584",
                        "endOfRange": 2500
                    }, {
                        "entityId": "5059029471330304",
                        "endOfRange": 5000
                    }, {
                        "entityId": "6373990801866752",
                        "endOfRange": 7500
                    }, {
                        "entityId": "5824770600599552",
                        "endOfRange": 10000
                    }],
                    "name": "Concluded AB - Impression",
                    "bucketingStrategy": null,
                    "experimentMetadata": {
                        "allocationPolicy": "manual",
                        "layerId": "4965819151548416"
                    },
                    "deployed": false
                }],
                "policy": "single_experiment",
                "viewIds": ["6590806790766592"],
                "weightDistributions": null,
                "decisionMetadata": {
                    "experimentPriorities": [[{
                        "entityId": "5261820647178240",
                        "endOfRange": null
                    }]],
                    "experimentWeights": null,
                    "offerConsistency": null
                },
                "concluded": true
            }, {
                "changes": null,
                "id": "5027736792596480",
                "name": "Paused AB - Impression",
                "commitId": null,
                "groupId": null,
                "holdback": null,
                "activation": {},
                "integrationSettings": {},
                "integrationStringVersion": 2,
                "experiments": [{
                    "audienceIds": null,
                    "audienceName": "Everyone else",
                    "changes": null,
                    "id": "5106556639903744",
                    "integrationSettings": null,
                    "variations": [{
                        "id": "5669506593325056",
                        "name": "Original",
                        "actions": [{
                            "viewId": "6590806790766592",
                            "changes": [{
                                "attributes": {
                                    "html": "yes"
                                },
                                "css": {},
                                "selector": "tr:nth-of-type(2) > td:nth-of-type(2)",
                                "type": "attribute",
                                "id": "26d0ab37-c4be-47fe-b6ca-38b402fe2ece",
                                "dependencies": []
                            }]
                        }]
                    }, {
                        "id": "5883071761743872",
                        "name": "Variation #1",
                        "actions": [{
                            "viewId": "6590806790766592",
                            "changes": [{
                                "attributes": {
                                    "html": "yes"
                                },
                                "css": {},
                                "selector": "tr:nth-of-type(2) > td:nth-of-type(3)",
                                "type": "attribute",
                                "id": "ae6bce26-f58a-4dec-b5e4-c4d167c2a5b4",
                                "dependencies": []
                            }]
                        }]
                    }, {
                        "id": "4684813047693312",
                        "name": "Variation #2",
                        "actions": [{
                            "viewId": "6590806790766592",
                            "changes": [{
                                "attributes": {
                                    "html": "yes"
                                },
                                "css": {},
                                "selector": "tr:nth-of-type(2) > td:nth-of-type(4)",
                                "type": "attribute",
                                "id": "5e9eca3b-f0d2-4dbf-b39a-e828c06dab27",
                                "dependencies": []
                            }]
                        }]
                    }, {
                        "id": "5619476717109248",
                        "name": "Variation #3",
                        "actions": [{
                            "viewId": "6590806790766592",
                            "changes": [{
                                "attributes": {
                                    "html": "yes"
                                },
                                "css": {},
                                "selector": "tr:nth-of-type(2) > td:nth-of-type(5)",
                                "type": "attribute",
                                "id": "a96304af-e28d-42bc-99c9-d63781799e66",
                                "dependencies": []
                            }]
                        }]
                    }],
                    "weightDistributions": [{
                        "entityId": "5669506593325056",
                        "endOfRange": 2500
                    }, {
                        "entityId": "5883071761743872",
                        "endOfRange": 5000
                    }, {
                        "entityId": "4684813047693312",
                        "endOfRange": 7500
                    }, {
                        "entityId": "5619476717109248",
                        "endOfRange": 10000
                    }],
                    "name": "Paused AB - Impression",
                    "bucketingStrategy": null,
                    "experimentMetadata": {
                        "allocationPolicy": "manual",
                        "layerId": "5027736792596480"
                    },
                    "deployed": false
                }],
                "policy": "single_experiment",
                "viewIds": ["6590806790766592"],
                "weightDistributions": null,
                "decisionMetadata": {
                    "experimentPriorities": [],
                    "experimentWeights": null,
                    "offerConsistency": null
                },
                "concluded": false
            }, {
                "changes": null,
                "id": "5200920074518528",
                "name": "Paused MAB - Impression",
                "commitId": null,
                "groupId": null,
                "holdback": null,
                "activation": {},
                "integrationSettings": {},
                "integrationStringVersion": 2,
                "experiments": [{
                    "audienceIds": null,
                    "audienceName": "Everyone else",
                    "changes": null,
                    "id": "6405971128352768",
                    "integrationSettings": null,
                    "variations": [{
                        "id": "4805120047710208",
                        "name": "Original",
                        "actions": [{
                            "viewId": "6590806790766592",
                            "changes": [{
                                "attributes": {
                                    "html": "yes"
                                },
                                "css": {},
                                "selector": "tr:nth-of-type(7) > td:nth-of-type(2)",
                                "type": "attribute",
                                "id": "b9d8cfb5-68e6-4443-8c65-e45541000954",
                                "dependencies": []
                            }]
                        }]
                    }, {
                        "id": "6496339337412608",
                        "name": "Variation #1",
                        "actions": [{
                            "viewId": "6590806790766592",
                            "changes": [{
                                "attributes": {
                                    "html": "yes"
                                },
                                "css": {},
                                "selector": "tr:nth-of-type(7) > td:nth-of-type(3)",
                                "type": "attribute",
                                "id": "170c46cd-a172-4983-a9fc-0b5e23695afd",
                                "dependencies": []
                            }]
                        }]
                    }, {
                        "id": "5931019954552832",
                        "name": "Variation #2",
                        "actions": [{
                            "viewId": "6590806790766592",
                            "changes": [{
                                "attributes": {
                                    "html": "yes"
                                },
                                "css": {},
                                "selector": "tr:nth-of-type(7) > td:nth-of-type(4)",
                                "type": "attribute",
                                "id": "0057eeb0-cad7-4be3-9f48-68e07c66a256",
                                "dependencies": []
                            }]
                        }]
                    }, {
                        "id": "5187511186620416",
                        "name": "Variation #3",
                        "actions": [{
                            "viewId": "6590806790766592",
                            "changes": [{
                                "attributes": {
                                    "html": "yes"
                                },
                                "css": {},
                                "selector": "tr:nth-of-type(7) > td:nth-of-type(5)",
                                "type": "attribute",
                                "id": "dca7ec43-4114-4644-a1b7-7fb729e30f7e",
                                "dependencies": []
                            }]
                        }]
                    }],
                    "weightDistributions": [{
                        "entityId": "4805120047710208",
                        "endOfRange": 2500
                    }, {
                        "entityId": "6496339337412608",
                        "endOfRange": 5000
                    }, {
                        "entityId": "5931019954552832",
                        "endOfRange": 7500
                    }, {
                        "entityId": "5187511186620416",
                        "endOfRange": 10000
                    }],
                    "name": "Paused MAB - Impression",
                    "bucketingStrategy": null,
                    "experimentMetadata": {
                        "allocationPolicy": "manual",
                        "layerId": "5200920074518528"
                    },
                    "deployed": false
                }],
                "policy": "single_experiment",
                "viewIds": ["6590806790766592"],
                "weightDistributions": null,
                "decisionMetadata": {
                    "experimentPriorities": [],
                    "experimentWeights": null,
                    "offerConsistency": null
                },
                "concluded": false
            }, {
                "changes": null,
                "id": "5648235818123264",
                "name": "Deployed AB - Impression",
                "commitId": null,
                "groupId": null,
                "holdback": 3000,
                "activation": {},
                "integrationSettings": {},
                "integrationStringVersion": 2,
                "experiments": [{
                    "audienceIds": null,
                    "audienceName": "Everyone else",
                    "changes": null,
                    "id": "5769371763605504",
                    "integrationSettings": null,
                    "variations": [{
                        "id": "6692541832101888",
                        "name": "Original",
                        "actions": [{
                            "viewId": "6590806790766592",
                            "changes": [{
                                "attributes": {
                                    "html": "yes"
                                },
                                "css": {},
                                "selector": "tr:nth-of-type(5) > td:nth-of-type(2)",
                                "type": "attribute",
                                "id": "18067419-a9d7-44b2-a346-4b711044e277",
                                "dependencies": []
                            }]
                        }]
                    }, {
                        "id": "6259189815705600",
                        "name": "Variation #1",
                        "actions": [{
                            "viewId": "6590806790766592",
                            "changes": [{
                                "attributes": {
                                    "html": "yes"
                                },
                                "css": {},
                                "selector": "tr:nth-of-type(5) > td:nth-of-type(3)",
                                "type": "attribute",
                                "id": "72b0692d-c888-4375-91a9-6bf37b953f07",
                                "dependencies": []
                            }]
                        }]
                    }, {
                        "id": "5621979424751616",
                        "name": "Variation #2",
                        "actions": [{
                            "viewId": "6590806790766592",
                            "changes": [{
                                "attributes": {
                                    "html": "yes"
                                },
                                "css": {},
                                "selector": "tr:nth-of-type(5) > td:nth-of-type(4)",
                                "type": "attribute",
                                "id": "089446a0-4b78-4bd0-9f8d-a56f794556c1",
                                "dependencies": []
                            }]
                        }]
                    }, {
                        "id": "4531276808454144",
                        "name": "Variation #3",
                        "actions": [{
                            "viewId": "6590806790766592",
                            "changes": [{
                                "attributes": {
                                    "html": "yes"
                                },
                                "css": {},
                                "selector": "tr:nth-of-type(5) > td:nth-of-type(5)",
                                "type": "attribute",
                                "id": "b3017b60-7b55-4c31-9936-09049b3b5b70",
                                "dependencies": []
                            }]
                        }]
                    }],
                    "weightDistributions": [{
                        "entityId": "6692541832101888",
                        "endOfRange": 10000
                    }],
                    "name": "Deployed AB - Impression",
                    "bucketingStrategy": null,
                    "experimentMetadata": {
                        "allocationPolicy": "manual",
                        "layerId": "5648235818123264"
                    },
                    "deployed": true
                }],
                "policy": "single_experiment",
                "viewIds": ["6590806790766592"],
                "weightDistributions": null,
                "decisionMetadata": {
                    "experimentPriorities": [],
                    "experimentWeights": null,
                    "offerConsistency": null
                },
                "concluded": true
            }, {
                "changes": null,
                "id": "6117936931274752",
                "name": "Draft AB - Impression",
                "commitId": null,
                "groupId": null,
                "holdback": null,
                "activation": {},
                "integrationSettings": {},
                "integrationStringVersion": 2,
                "experiments": [{
                    "audienceIds": null,
                    "audienceName": "Everyone else",
                    "changes": null,
                    "id": "5597667359719424",
                    "integrationSettings": null,
                    "variations": [{
                        "id": "4934355613646848",
                        "name": "Original",
                        "actions": [{
                            "viewId": "6590806790766592",
                            "changes": [{
                                "attributes": {
                                    "html": "yes"
                                },
                                "css": {},
                                "selector": "tr:nth-of-type(1) > td:nth-of-type(2)",
                                "type": "attribute",
                                "id": "09223fba-6e51-43b8-8a68-a0a83a17a7bb",
                                "dependencies": []
                            }]
                        }]
                    }, {
                        "id": "6060255520489472",
                        "name": "Variation #1",
                        "actions": [{
                            "viewId": "6590806790766592",
                            "changes": [{
                                "attributes": {
                                    "html": "yes"
                                },
                                "css": {},
                                "selector": "tr:nth-of-type(1) > td:nth-of-type(3)",
                                "type": "attribute",
                                "id": "055d44d5-d19d-4757-a57a-8f39391f4307",
                                "dependencies": []
                            }]
                        }]
                    }, {
                        "id": "6229145848381440",
                        "name": "Variation #2",
                        "actions": [{
                            "viewId": "6590806790766592",
                            "changes": [{
                                "attributes": {
                                    "html": "yes"
                                },
                                "css": {},
                                "selector": "tr:nth-of-type(1) > td:nth-of-type(4)",
                                "type": "attribute",
                                "id": "f37981b9-3dac-4e6f-8c9f-37598e65ec26",
                                "dependencies": []
                            }]
                        }]
                    }, {
                        "id": "6519086876721152",
                        "name": "Variation #3",
                        "actions": [{
                            "viewId": "6590806790766592",
                            "changes": [{
                                "attributes": {
                                    "html": "yes"
                                },
                                "css": {},
                                "selector": "tr:nth-of-type(1) > td:nth-of-type(5)",
                                "type": "attribute",
                                "id": "051c8de6-a6af-4ea7-a427-dd39c1567055",
                                "dependencies": []
                            }]
                        }]
                    }],
                    "weightDistributions": [{
                        "entityId": "4934355613646848",
                        "endOfRange": 2500
                    }, {
                        "entityId": "6060255520489472",
                        "endOfRange": 5000
                    }, {
                        "entityId": "6229145848381440",
                        "endOfRange": 7500
                    }, {
                        "entityId": "6519086876721152",
                        "endOfRange": 10000
                    }],
                    "name": "Draft AB - Impression",
                    "bucketingStrategy": null,
                    "experimentMetadata": {
                        "allocationPolicy": "manual",
                        "layerId": "6117936931274752"
                    },
                    "deployed": false
                }],
                "policy": "single_experiment",
                "viewIds": ["6590806790766592"],
                "weightDistributions": null,
                "decisionMetadata": {
                    "experimentPriorities": [[{
                        "entityId": "5597667359719424",
                        "endOfRange": null
                    }]],
                    "experimentWeights": null,
                    "offerConsistency": null
                },
                "concluded": false
            }, {
                "changes": null,
                "id": "6390512735748096",
                "name": "Running AB - Impression",
                "commitId": null,
                "groupId": null,
                "holdback": null,
                "activation": {},
                "integrationSettings": {},
                "integrationStringVersion": 2,
                "experiments": [{
                    "audienceIds": null,
                    "audienceName": "Everyone else",
                    "changes": null,
                    "id": "6638733072531456",
                    "integrationSettings": null,
                    "variations": [{
                        "id": "5110415181479936",
                        "name": "Original",
                        "actions": [{
                            "viewId": "6590806790766592",
                            "changes": [{
                                "attributes": {
                                    "html": "yes"
                                },
                                "css": {},
                                "selector": "tr:nth-of-type(3) > td:nth-of-type(2)",
                                "type": "attribute",
                                "id": "bc2af42d-ebdf-49df-af99-1586ed706e3f",
                                "dependencies": []
                            }]
                        }]
                    }, {
                        "id": "5183359245090816",
                        "name": "Variation #1",
                        "actions": [{
                            "viewId": "6590806790766592",
                            "changes": [{
                                "attributes": {
                                    "html": "yes"
                                },
                                "css": {},
                                "selector": "tr:nth-of-type(3) > td:nth-of-type(3)",
                                "type": "attribute",
                                "id": "8386771b-9501-4d9d-9813-2f2a6ca892c7",
                                "dependencies": []
                            }]
                        }]
                    }, {
                        "id": "6236315088322560",
                        "name": "Variation #2",
                        "actions": [{
                            "viewId": "6590806790766592",
                            "changes": [{
                                "attributes": {
                                    "html": "yes"
                                },
                                "css": {},
                                "selector": "tr:nth-of-type(3) > td:nth-of-type(4)",
                                "type": "attribute",
                                "id": "bbedf3f3-a4b7-4e41-b1d0-b31e9ff140bc",
                                "dependencies": []
                            }]
                        }]
                    }, {
                        "id": "5512833165688832",
                        "name": "Variation #3",
                        "actions": [{
                            "viewId": "6590806790766592",
                            "changes": [{
                                "attributes": {
                                    "html": "yes"
                                },
                                "css": {},
                                "selector": "tr:nth-of-type(3) > td:nth-of-type(5)",
                                "type": "attribute",
                                "id": "83835385-39c8-4e5b-aa0c-87c7ff2392ec",
                                "dependencies": []
                            }]
                        }]
                    }],
                    "weightDistributions": [{
                        "entityId": "5110415181479936",
                        "endOfRange": 2500
                    }, {
                        "entityId": "5183359245090816",
                        "endOfRange": 5000
                    }, {
                        "entityId": "6236315088322560",
                        "endOfRange": 7500
                    }, {
                        "entityId": "5512833165688832",
                        "endOfRange": 10000
                    }],
                    "name": "Running AB - Impression",
                    "bucketingStrategy": null,
                    "experimentMetadata": {
                        "allocationPolicy": "manual",
                        "layerId": "6390512735748096"
                    },
                    "deployed": false
                }],
                "policy": "single_experiment",
                "viewIds": ["6590806790766592"],
                "weightDistributions": null,
                "decisionMetadata": {
                    "experimentPriorities": [[{
                        "entityId": "6638733072531456",
                        "endOfRange": null
                    }]],
                    "experimentWeights": null,
                    "offerConsistency": null
                },
                "concluded": false
            }, {
                "changes": null,
                "id": "6669195530731520",
                "name": "Draft MAB - Impression",
                "commitId": null,
                "groupId": null,
                "holdback": null,
                "activation": {},
                "integrationSettings": {},
                "integrationStringVersion": 2,
                "experiments": [{
                    "audienceIds": null,
                    "audienceName": "Everyone else",
                    "changes": null,
                    "id": "5071896757141504",
                    "integrationSettings": null,
                    "variations": [{
                        "id": "6709101816709120",
                        "name": "Original",
                        "actions": [{
                            "viewId": "6590806790766592",
                            "changes": [{
                                "attributes": {
                                    "html": "yes"
                                },
                                "css": {},
                                "selector": "tr:nth-of-type(6) > td:nth-of-type(2)",
                                "type": "attribute",
                                "id": "d9f572ba-c1e4-48a2-8ca8-a9b6925721eb",
                                "dependencies": []
                            }]
                        }]
                    }, {
                        "id": "5176838075449344",
                        "name": "Variation #1",
                        "actions": [{
                            "viewId": "6590806790766592",
                            "changes": [{
                                "attributes": {
                                    "html": "yes"
                                },
                                "css": {},
                                "selector": "tr:nth-of-type(6) > td:nth-of-type(3)",
                                "type": "attribute",
                                "id": "fa0acae0-9f53-4acf-a749-6c977677476c",
                                "dependencies": []
                            }]
                        }]
                    }, {
                        "id": "4562855119290368",
                        "name": "Variation #2",
                        "actions": [{
                            "viewId": "6590806790766592",
                            "changes": [{
                                "attributes": {
                                    "html": "yes"
                                },
                                "css": {},
                                "selector": "tr:nth-of-type(6) > td:nth-of-type(4)",
                                "type": "attribute",
                                "id": "97f1d0b5-54cd-4563-9e4a-70b5e9993282",
                                "dependencies": []
                            }]
                        }]
                    }, {
                        "id": "6302737982291968",
                        "name": "Variation #3",
                        "actions": [{
                            "viewId": "6590806790766592",
                            "changes": [{
                                "attributes": {
                                    "html": "yes"
                                },
                                "css": {},
                                "selector": "tr:nth-of-type(6) > td:nth-of-type(5)",
                                "type": "attribute",
                                "id": "f50ac2b7-ed5f-4662-bd40-7093cb6e653f",
                                "dependencies": []
                            }]
                        }]
                    }],
                    "weightDistributions": [{
                        "entityId": "6709101816709120",
                        "endOfRange": 2500
                    }, {
                        "entityId": "5176838075449344",
                        "endOfRange": 5000
                    }, {
                        "entityId": "4562855119290368",
                        "endOfRange": 7500
                    }, {
                        "entityId": "6302737982291968",
                        "endOfRange": 10000
                    }],
                    "name": "Draft MAB - Impression",
                    "bucketingStrategy": null,
                    "experimentMetadata": {
                        "allocationPolicy": "manual",
                        "layerId": "6669195530731520"
                    },
                    "deployed": false
                }],
                "policy": "single_experiment",
                "viewIds": ["6590806790766592"],
                "weightDistributions": null,
                "decisionMetadata": {
                    "experimentPriorities": [[{
                        "entityId": "5071896757141504",
                        "endOfRange": null
                    }]],
                    "experimentWeights": null,
                    "offerConsistency": null
                },
                "concluded": false
            }, {
                "changes": [{
                    "id": "1A88C5AA-F801-4D89-A441-E5AB511E2CDE",
                    "type": "custom_code",
                    "value": function($) {
                        console.log(`
            istiak
`);
                    },
                    "dependencies": []
                }],
                "id": "6687446105063424",
                "name": "Running MAB - Impression",
                "commitId": null,
                "groupId": null,
                "holdback": null,
                "activation": {},
                "integrationSettings": {},
                "integrationStringVersion": 2,
                "experiments": [{
                    "audienceIds": null,
                    "audienceName": "Everyone else",
                    "changes": null,
                    "id": "5685628289941504",
                    "integrationSettings": null,
                    "variations": [{
                        "id": "4969539985735680",
                        "name": "Original",
                        "actions": [{
                            "viewId": "6590806790766592",
                            "changes": [{
                                "attributes": {
                                    "html": "yes"
                                },
                                "css": {},
                                "selector": "tr:nth-of-type(8) > td:nth-of-type(2)",
                                "type": "attribute",
                                "id": "1d582cf7-6b70-4092-b6f0-874e74e1ba36",
                                "dependencies": []
                            }]
                        }]
                    }, {
                        "id": "5949890447015936",
                        "name": "Variation #1",
                        "actions": [{
                            "viewId": "6590806790766592",
                            "changes": [{
                                "attributes": {
                                    "html": "yes"
                                },
                                "css": {},
                                "selector": "tr:nth-of-type(8) > td:nth-of-type(3)",
                                "type": "attribute",
                                "id": "16587872-ecb7-4bd3-876d-a78647d5118f",
                                "dependencies": []
                            }]
                        }]
                    }, {
                        "id": "4531169853702144",
                        "name": "Variation #2",
                        "actions": [{
                            "viewId": "6590806790766592",
                            "changes": [{
                                "attributes": {
                                    "html": "yes"
                                },
                                "css": {},
                                "selector": "tr:nth-of-type(8) > td:nth-of-type(4)",
                                "type": "attribute",
                                "id": "c764529c-77a2-43bf-af22-d87b69a6ab96",
                                "dependencies": []
                            }]
                        }]
                    }, {
                        "id": "5386940493594624",
                        "name": "Variation #3",
                        "actions": [{
                            "viewId": "6590806790766592",
                            "changes": [{
                                "attributes": {
                                    "html": "yes"
                                },
                                "css": {},
                                "selector": "tr:nth-of-type(8) > td:nth-of-type(5)",
                                "type": "attribute",
                                "id": "45a6dbcd-9d88-40b0-a71e-f469fb48e941",
                                "dependencies": []
                            }]
                        }]
                    }],
                    "weightDistributions": [{
                        "entityId": "4969539985735680",
                        "endOfRange": 2500
                    }, {
                        "entityId": "5949890447015936",
                        "endOfRange": 5000
                    }, {
                        "entityId": "4531169853702144",
                        "endOfRange": 7500
                    }, {
                        "entityId": "5386940493594624",
                        "endOfRange": 10000
                    }],
                    "name": "Running MAB - Impression",
                    "bucketingStrategy": null,
                    "experimentMetadata": {
                        "allocationPolicy": "manual",
                        "layerId": "6687446105063424"
                    },
                    "deployed": false
                }],
                "policy": "single_experiment",
                "viewIds": ["6590806790766592"],
                "weightDistributions": null,
                "decisionMetadata": {
                    "experimentPriorities": [[{
                        "entityId": "5685628289941504",
                        "endOfRange": null
                    }]],
                    "experimentWeights": null,
                    "offerConsistency": null
                },
                "concluded": false
            }],
            "groups": [],
            "audiences": [],
            "listTargetingKeys": [],
            "visitorAttributes": [],
            "visitorIdLocator": null,
            "integrationSettings": [],
            "views": [{
                "id": "6590806790766592",
                "category": "other",
                "apiName": "5955517055500288_opti_github_page",
                "name": "opti github page",
                "staticConditions": ["and", ["or", {
                    "match": "simple",
                    "type": "url",
                    "value": "https://istiakbinmahmod.github.io/optimizely-snippet-testing"
                }]],
                "deactivationEnabled": false,
                "undoOnDeactivation": false,
                "tags": []
            }],
            "events": [],
            "dimensions": [],
            "interestGroups": [],
            "tagGroups": []
        }
    });
    window.optimizelyDataApi.initializeOptimizelyPreview({
        "projectId": "5955517055500288"
    });
}
)();
