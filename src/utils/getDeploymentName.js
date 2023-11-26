export const getDeploymentName = (deploymentText) => {
  return deploymentText.match(/name: "(?<name>.+)"/).groups.name
}
