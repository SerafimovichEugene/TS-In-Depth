export function sealed(param: string) {
    return function(target: Function): void {
        console.log(`Sealing the constructor ${param}`);
        console.log(target);
        Object.seal(target);
        Object.seal(target.prototype);
    }
}

export function logger<TFunction extends Function>(target: TFunction): TFunction {

    const newContructor: Function = function() {
        console.log('creating new instance');
        console.log(target);
        this.age = 30;
    }

    newContructor.prototype = Object.create(target.prototype);
    newContructor.prototype.constructor = newContructor;
    newContructor.prototype.printLibrarian = function() {
        console.log(`name: ${this.name}, age: ${this.age}`);
    }

    return newContructor as TFunction;
}

export function writable(isWritable: boolean) {
    return function(
        _target: Object,
        _methodName: string,
        descriptor: PropertyDescriptor
        ) {
            descriptor.writable = isWritable;
        }
}

export function timeout (ms: number = 0) {
    return function(
        _target: Object,
        _methodName: string,
        descriptor: PropertyDescriptor
        ) {
            const originalMethod = descriptor.value;

            descriptor.value = function(...args: any[]){
                setTimeout(() => {
                    return originalMethod.apply(this, args);
                }, ms)
            }
            return descriptor;
        }
}

export function logParameter(
    target: any,
    methodName: string,
    index: number
    ) {
    const key = `${methodName}_decor_params_indexes`;

    if(Array.isArray(target[key])) {
        target[key].push(index);
    } else {
        target[key] = [index];
    }
}

export function logMethod (
    target: Object,
    methodName: string,
    descriptor: PropertyDescriptor
    ) {
        const method = descriptor.value;

        descriptor.value = function(...args: any[]) {
            const key = `${methodName}_decor_params_indexes`;
            const indexes = target[key];

            if(Array.isArray(indexes)) {
                args.forEach((arg, i) => {
                    if(indexes.includes(i)) {
                        console.log(`Method: ${methodName}, ParamIndex: ${i}, ParamVAlue: ${arg}`)
                    }
                })
            }

            return method.apply(this, args); // this should be context of fun descripto.value. if not - reassign it ;
        }
        return descriptor;
}

export function format (pref: string = `Mr./Mrs.`) {
    return function(target: any, propertyName: string) {
        makeProperty(target, propertyName, value => `${pref} ${value}`, value => value)
    }
}


function makeProperty <T> (
    prototype: any,
    propertyName: string,
    getTransformer: (value: any) => T,
    setTransformer: (value: any) => T
) {
    const values = new Map<any, T>();
    Object.defineProperty(prototype, propertyName, {
        set(firstValue: any) {
            Object.defineProperty(this, propertyName, {
                get() {
                    if (getTransformer) {
                        return getTransformer(values.get(this));
                    } else {
                        values.get(this);
                    }
                },
                set(value: any) {
                    if (setTransformer) {
                        values.set(this, setTransformer(value));
                    } else {
                        values.set(this, value);
                    }
                },
                enumerable: true
            });
            this[propertyName] = firstValue;
        },
        enumerable: true,
        configurable: true
    });
}

export function positiveInteger(
    _target: object,
    _propertyName: string,
    descriptor: PropertyDescriptor,
) {
    const originalSet = descriptor.set;

    descriptor.set = function(value: number) {
        if(value < 0 || !Number.isInteger(value)) {
            throw new Error(`Invalid value`);
        }

        if(originalSet) {
            originalSet.call(this, value);
        }
    }
    return descriptor;
}