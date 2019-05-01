function solve(input) {
    let systems = {};

    for (let inputRow of input) {
        let [systemName, componentName, subComponentName] = inputRow.split(' | ');

        if (!systems.hasOwnProperty(systemName)) {
            systems[systemName] = {};
        }
        let allComponents = systems[systemName];

        if (!allComponents.hasOwnProperty(componentName)) {
            allComponents[componentName] = [];
        }
        let allSubComponents = allComponents[componentName];
        allSubComponents.push(subComponentName);
    }
    let sortedSystems = Object.entries(systems)
        .sort(compareSystems);
    
    for (let [system, components] of sortedSystems) {
        let sortedComponents = Object.entries(components)
            .sort((a, b) => {
                return b[1].length - a[1].length;
            });
        console.log(system);
        
        for ([ component, subComponents] of sortedComponents) {
            console.log(`|||${component}`);
            
            for (let subCom of subComponents) {
                console.log(`||||||${subCom}`);
            }
        }
    }

    function compareSystems(a, b) {
        let [ systemAName, systemAComponents ] = a;

        let [ systemBName, systemBComponents ] = b;

        let aComponentsCount =  Object.entries(systemAComponents).length;
        let bComponentsCount = Object.entries(systemBComponents).length;

        let firstCriteria = bComponentsCount - aComponentsCount;

        if (firstCriteria === 0) {
            return systemAName.localeCompare(systemBName);
        }
        return firstCriteria;
    }
}

solve([
    'SULS | Main Site | Home Page',
    'SULS | Main Site | Login Page',
    'SULS | Main Site | Register Page',
    'SULS | Judge Site | Login Page',
    'SULS | Judge Site | Submittion Page',
    'Lambda | CoreA | A23',
    'SULS | Digital Site | Login Page',
    'Lambda | CoreB | B24',
    'Lambda | CoreA | A24',
    'Lambda | CoreA | A25',
    'Lambda | CoreC | C4',
    'Indice | Session | Default Storage',
    'Indice | Session | Default Security'
]);