import uuid from 'node-uuid';

// Get the instance ID from localStorage
let instanceId = localStorage.getItem('ccInstanceId');
if (instanceId) {
    instanceId = JSON.parse(instanceId);
    console.log('Re-initiating CatChat instance (' + instanceId + ')');
} else {
    instanceId = uuid.v4();
    console.log('Starting new CatChat instance (' + instanceId + ')');
}

const appConfig = {
    id: instanceId,
};

// Save the instance ID to localStorage
localStorage.setItem('ccInstanceId', JSON.stringify(appConfig.id));

export default appConfig;
