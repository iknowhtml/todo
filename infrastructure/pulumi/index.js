const gcp = require("@pulumi/gcp");

const computeNetwork = new gcp.compute.Network("network", {
  autoCreateSubnetworks: true
});

const computeFirewall = new gcp.compute.Firewall("firewall", {
  network: computeNetwork.selfLink,
  allows: [
    {
      protocol: "tcp",
      ports: ["22", "80"]
    }
  ]
});

const computeInstance = new gcp.compute.Instance(
  "general-purpose-vm",
  {
    machineType: "f1-micro",
    bootDisk: {
      initializeParams: {
        image: "cos-cloud/cos-stable-76-12239-60-0"
      }
    },
    networkInterfaces: [
      {
        network: computeNetwork.id,
        accessConfigs: [{}]
      }
    ],
    serviceAccount: {
      scopes: ["https://www.googleapis.com/auth/cloud-platform"]
    }
  },
  { dependsOn: [computeFirewall] }
);

exports.instanceName = computeInstance.name;
exports.instanceIP =
  computeInstance.networkInterfaces[0].accessConfigs[0].natIp;
