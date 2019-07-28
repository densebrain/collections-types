//type GlobalMap<K,T> = Window.Map<K,T>


declare module "collections/map" {
  
  // namespace ECMACollections {
  //   interface Map<K, V> {
  //     clear():void;
  //
  //     delete(key:K):boolean;
  //
  //     forEach(callbackfn:(value:V, key:K, map:Map<K, V>) => void, thisArg?:any):void;
  //
  //     get(key:K):V | undefined;
  //
  //     has(key:K):boolean;
  //
  //     set(key:K, value:V):this;
  //
  //     readonly size:number;
  //   }
  //
  //   interface MapConstructor {
  //     new():Map<any, any>;
  //
  //     new<K, V>(entries?:ReadonlyArray<Array<[K, V]>> | null):Map<K, V>;
  //
  //     readonly prototype:Map<any, any>;
  //   }
  //
  //   interface ReadonlyMap<K, V> {
  //     forEach(callbackfn:(value:V, key:K, map:ReadonlyMap<K, V>) => void, thisArg?:any):void;
  //
  //     get(key:K):V | undefined;
  //
  //     has(key:K):boolean;
  //
  //     readonly size:number;
  //   }
  //
  //   interface WeakMap<K extends object, V> {
  //     delete(key:K):boolean;
  //
  //     get(key:K):V | undefined;
  //
  //     has(key:K):boolean;
  //
  //     set(key:K, value:V):this;
  //   }
  //
  //   interface WeakMapConstructor {
  //     new<K extends object = object, V = any>(entries?:ReadonlyArray<[K, V]> | null):WeakMap<K, V>;
  //
  //     readonly prototype:WeakMap<object, any>;
  //   }
  //
  //   interface Set<T> {
  //     add(value:T):this;
  //
  //     clear():void;
  //
  //     delete(value:T):boolean;
  //
  //     forEach(callbackfn:(value:T, value2:T, set:Set<T>) => void, thisArg?:any):void;
  //
  //     has(value:T):boolean;
  //
  //     readonly size:number;
  //   }
  //
  //   interface SetConstructor {
  //     new<T = any>(values?:ReadonlyArray<T> | null):Set<T>;
  //
  //     readonly prototype:Set<any>;
  //   }
  //
  //   interface ReadonlySet<T> {
  //     forEach(callbackfn:(value:T, value2:T, set:ReadonlySet<T>) => void, thisArg?:any):void;
  //
  //     has(value:T):boolean;
  //
  //     readonly size:number;
  //   }
  //
  //   interface WeakSet<T extends object> {
  //     add(value:T):this;
  //
  //     delete(value:T):boolean;
  //
  //     has(value:T):boolean;
  //   }
  //
  //   interface WeakSetConstructor {
  //     new<T extends object = object>(values?:ReadonlyArray<T> | null):WeakSet<T>;
  //
  //     readonly prototype:WeakSet<object>;
  //   }
  //
  //
  // }
  
  export interface CollectionsMapConstructor extends MapConstructor {
    new<K,V>(entries?:ReadonlyArray<Array<[K, V]>> | null): CollectionsMap<K,V>
  }
  
  export interface CollectionsMap<K,V> extends Map<K,V> {
    
    
    add(value:V, key:K);
    
    addBeforeMapChangeListener(listener:any, token:any);
    
    addBeforeOwnPropertyChangeListener(key:any, listener:any):any;
    
    addEach(values:any):any;
    
    addMapChangeListener(listener:any, token:any, beforeChange:any):any;
    
    addOwnPropertyChangeListener(key:any, listener:any, beforeChange:any):any;
    
    all():any;
    
    any():any;
    
    average(zero:any):any;
    
    // Native method; no parameter or return type inference available
    clear():any;
    
    clone(depth:any, memo:any):any;
    
    concat(...args:any[]):any;
    
    constructClone(values:any):any;
    
    // Native method; no parameter or return type inference available
    
    
    deleteEach(values:any, equals:any):any;
    
    dispatchBeforeMapChange(key:any, value:any):any;
    
    dispatchBeforeOwnPropertyChange(key:any, listener:any):any;
    
    dispatchMapChange(key:any, value:any, beforeChange:any):void;
    
    dispatchOwnPropertyChange(key:any, value:any, beforeChange:any):void;
    
    // Native method; no parameter or return type inference available
    entries():any;
    
    entriesArray():any;
    
    enumerate(start:any):any;
    
    equals(that:any, equals:any):any;
    
    every(callback:any, ...args:any[]):any;
    
    filter(callback:any, ...args:any[]):any;
    
    flatten():any;
    
    // Native method; no parameter or return type inference available
    
    
    // Native method; no parameter or return type inference available
    get(p0:K, defaultValue?: V | undefined): V | undefined;
    
    getAllMapChangeDescriptors():any;
    
    getMapChangeDescriptor(token:any):any;
    
    getOwnPropertyChangeDescriptor(key:any):any;
    
    group(callback:any, thisp:any, equals:any):any;
    
    // Native method; no parameter or return type inference available
    has(key:K):boolean;
    
    hasOwnPropertyChangeDescriptor(key:any):any;
    
    //items():any;
    
    //iterator(...args:any[]):any;
    
    join(delimiter:any):any;
    
    // Native method; no parameter or return type inference available
    
    keysArray():Array<K>;
    
    makeObservable():void;
    
    makePropertyObservable(key:any, ...args:any[]):any;
    
    map(callback:any, ...args:any[]):any;
    
    max(compare:any):any;
    
    min(compare:any):any;
    
    only():any;
    
    reduce(callback:any, basis:any, ...args:any[]):any;
    
    reduceRight(callback:any, basis:any, ...args:any[]):any;
    
    removeBeforeMapChangeListener(listener:any, token:any):any;
    
    removeBeforeOwnPropertyChangeListener(key:any, listener:any):any;
    
    removeMapChangeListener(listener:any, token:any, beforeChange:any):void;
    
    removeOwnPropertyChangeListener(key:any, listener:any, beforeChange:any):void;
    
    reversed():any;
    
    // Native method; no parameter or return type inference available
    set(p0:any, p1:any):any;
    
    some(callback:any, ...args:any[]):any;
    
    sorted(compare:any, by:any, order:any):any;
    
    sum(zero:any):any;
    
    toArray():Array<[K,V]>;
    
    toJSON():any;
    
    toObject():any;
    
    // Native method; no parameter or return type inference available
  
    valuesArray():Array<V>;
    
    zip(...args:any[]):any;
    
    
    
    
    
  }
  //
  // export namespace Map {
  //   class CollectionsMap {
  //     constructor(values:any, equals:any, hash:any, getDefault:any);
  //
  //     Item(key:any, value:any):void;
  //
  //     add(value:any, key:any):any;
  //
  //     addEach(values:any):any;
  //
  //     all():any;
  //
  //     any():any;
  //
  //     average(zero:any):any;
  //
  //     clear():void;
  //
  //     clone(depth:any, memo:any):any;
  //
  //     concat(...args:any[]):any;
  //
  //     constructClone(values:any):any;
  //
  //     delete(key:any):any;
  //
  //     deleteEach(values:any, equals:any):any;
  //
  //     entries():any;
  //
  //     entriesArray():any;
  //
  //     enumerate(start:any):any;
  //
  //     equals(that:any, equals:any):any;
  //
  //     every(callback:any, ...args:any[]):any;
  //
  //     filter(callback:any, ...args:any[]):any;
  //
  //     flatten():any;
  //
  //     forEach(callback:any, ...args:any[]):any;
  //
  //     get(key:any, defaultValue:any, ...args:any[]):any;
  //
  //     group(callback:any, thisp:any, equals:any):any;
  //
  //     has(key:any):any;
  //
  //     items():any;
  //
  //     iterator(...args:any[]):any;
  //
  //     join(delimiter:any):any;
  //
  //     keys():any;
  //
  //     keysArray():any;
  //
  //     log(charmap:any, logNode:any, callback:any, thisp:any):void;
  //
  //     logNode(node:any, log:any):void;
  //
  //     map(callback:any, ...args:any[]):any;
  //
  //     max(compare:any):any;
  //
  //     min(compare:any):any;
  //
  //     only():any;
  //
  //     reduce(callback:any, basis:any, thisp:any):any;
  //
  //     reduceRight(callback:any, basis:any, thisp:any):any;
  //
  //     reversed():any;
  //
  //     set(key:any, value:any):any;
  //
  //     some(callback:any, ...args:any[]):any;
  //
  //     sorted(compare:any, by:any, order:any):any;
  //
  //     sum(zero:any):any;
  //
  //     toArray():any;
  //
  //     toJSON():any;
  //
  //     toObject():any;
  //
  //     values():any;
  //
  //     valuesArray():any;
  //
  //     zip(...args:any[]):any;
  //
  //     static Map:any
  //
  //     static from(...args:any[]):any;
  //
  //   }
  //
  // }
}
// declare module "collections/sorted-array" {
//   export class SortedArray {
//     constructor(values:any, equals:any, compare:any, getDefault:any);
//
//     Iterator(array:any, start:any, end:any):void;
//
//     add(value:any):any;
//
//     addBeforeOwnPropertyChangeListener(key:any, listener:any):any;
//
//     addBeforeRangeChangeListener(listener:any, token:any):any;
//
//     addEach(values:any):any;
//
//     addOwnPropertyChangeListener(key:any, listener:any, beforeChange:any):any;
//
//     addRangeChangeListener(listener:any, token:any, beforeChange:any):any;
//
//     all():any;
//
//     any():any;
//
//     average(zero:any):any;
//
//     clear():void;
//
//     clone(depth:any, memo:any):any;
//
//     compare(that:any, compare:any):any;
//
//     concat(...args:any[]):any;
//
//     constructClone(values:any):any;
//
//     delete(value:any, equals:any):any;
//
//     deleteAll(value:any, equals:any):any;
//
//     deleteEach(values:any, equals:any):any;
//
//     dispatchBeforeOwnPropertyChange(key:any, listener:any):any;
//
//     dispatchBeforeRangeChange(plus:any, minus:any, index:any):any;
//
//     dispatchOwnPropertyChange(key:any, value:any, beforeChange:any):void;
//
//     dispatchRangeChange(plus:any, minus:any, index:any, beforeChange:any):void;
//
//     enumerate(start:any):any;
//
//     equals(that:any, equals:any):any;
//
//     every(callback:any, ...args:any[]):any;
//
//     filter(callback:any, ...args:any[]):any;
//
//     find(value:any, equals:any, index:any, ...args:any[]):any;
//
//     findLast(value:any, equals:any, index:any, ...args:any[]):any;
//
//     findLastValue(value:any, equals:any, index:any):any;
//
//     findValue(value:any, equals:any, index:any):any;
//
//     flatten():any;
//
//     forEach(callback:any, ...args:any[]):any;
//
//     get(value:any, equals:any):any;
//
//     getAllRangeChangeDescriptors():any;
//
//     getOwnPropertyChangeDescriptor(key:any):any;
//
//     getRangeChangeDescriptor(token:any):any;
//
//     group(callback:any, thisp:any, equals:any):any;
//
//     has(value:any, equals:any):any;
//
//     hasOwnPropertyChangeDescriptor(key:any):any;
//
//     indexOf(value:any):any;
//
//     iterate(start:any, end:any):any;
//
//     iterator(...args:any[]):any;
//
//     join(delimiter:any):any;
//
//     lastIndexOf(value:any):any;
//
//     makePropertyObservable(key:any, ...args:any[]):any;
//
//     map(callback:any, ...args:any[]):any;
//
//     max():any;
//
//     min():any;
//
//     one():any;
//
//     only():any;
//
//     pop():any;
//
//     push(...args:any[]):void;
//
//     reduce(callback:any, basis:any, ...args:any[]):any;
//
//     reduceRight(...args:any[]):any;
//
//     removeBeforeOwnPropertyChangeListener(key:any, listener:any):any;
//
//     removeBeforeRangeChangeListener(listener:any, token:any):any;
//
//     removeOwnPropertyChangeListener(key:any, listener:any, beforeChange:any):void;
//
//     removeRangeChangeListener(listener:any, token:any, beforeChange:any):void;
//
//     reversed():any;
//
//     shift():any;
//
//     slice(...args:any[]):any;
//
//     some(callback:any, ...args:any[]):any;
//
//     sorted(compare:any, by:any, order:any):any;
//
//     splice(index:any, length:any, ...args:any[]):any;
//
//     sum(zero:any):any;
//
//     swap(index:any, length:any, plus:any):any;
//
//     toArray():any;
//
//     toJSON():any;
//
//     toObject():any;
//
//     unshift(...args:any[]):void;
//
//     zip(...args:any[]):any;
//
//     static SortedArray:any
//
//     static from(...args:any[]):any;
//
//   }
// }
// declare module "collections/sorted-array-map" {
//   export class SortedArrayMap {
//     constructor(values:any, equals:any, compare:any, getDefault:any);
//
//     Item(key:any, value:any):void;
//
//     add(value:any, key:any):any;
//
//     addBeforeMapChangeListener(listener:any, token:any):any;
//
//     addBeforeOwnPropertyChangeListener(key:any, listener:any):any;
//
//     addEach(values:any):any;
//
//     addMapChangeListener(listener:any, token:any, beforeChange:any):any;
//
//     addOwnPropertyChangeListener(key:any, listener:any, beforeChange:any):any;
//
//     all():any;
//
//     any():any;
//
//     average(zero:any):any;
//
//     clear():void;
//
//     clone(depth:any, memo:any):any;
//
//     concat(...args:any[]):any;
//
//     constructClone(values:any):any;
//
//     delete(key:any):any;
//
//     deleteEach(values:any, equals:any):any;
//
//     dispatchBeforeMapChange(key:any, value:any):any;
//
//     dispatchBeforeOwnPropertyChange(key:any, listener:any):any;
//
//     dispatchMapChange(key:any, value:any, beforeChange:any):void;
//
//     dispatchOwnPropertyChange(key:any, value:any, beforeChange:any):void;
//
//     entries():any;
//
//     entriesArray():any;
//
//     enumerate(start:any):any;
//
//     equals(that:any, equals:any):any;
//
//     every(callback:any, ...args:any[]):any;
//
//     filter(callback:any, ...args:any[]):any;
//
//     flatten():any;
//
//     forEach(callback:any, ...args:any[]):any;
//
//     get(key:any, defaultValue:any, ...args:any[]):any;
//
//     getAllMapChangeDescriptors():any;
//
//     getMapChangeDescriptor(token:any):any;
//
//     getOwnPropertyChangeDescriptor(key:any):any;
//
//     group(callback:any, thisp:any, equals:any):any;
//
//     has(key:any):any;
//
//     hasOwnPropertyChangeDescriptor(key:any):any;
//
//     items():any;
//
//     iterator(...args:any[]):any;
//
//     join(delimiter:any):any;
//
//     keys():any;
//
//     keysArray():any;
//
//     makePropertyObservable(key:any, ...args:any[]):any;
//
//     map(callback:any, ...args:any[]):any;
//
//     max(compare:any):any;
//
//     min(compare:any):any;
//
//     only():any;
//
//     reduce(callback:any, basis:any, thisp:any):any;
//
//     reduceRight(callback:any, basis:any, thisp:any):any;
//
//     removeBeforeMapChangeListener(listener:any, token:any):any;
//
//     removeBeforeOwnPropertyChangeListener(key:any, listener:any):any;
//
//     removeMapChangeListener(listener:any, token:any, beforeChange:any):void;
//
//     removeOwnPropertyChangeListener(key:any, listener:any, beforeChange:any):void;
//
//     reversed():any;
//
//     set(key:any, value:any):any;
//
//     some(callback:any, ...args:any[]):any;
//
//     sorted(compare:any, by:any, order:any):any;
//
//     sum(zero:any):any;
//
//     toArray():any;
//
//     toJSON():any;
//
//     toObject():any;
//
//     values():any;
//
//     valuesArray():any;
//
//     zip(...args:any[]):any;
//
//     static SortedArrayMap:any
//
//     static from(...args:any[]):any;
//
//   }
// }
// declare module "collections/sorted-array-set" {
//   export class SortedArraySet {
//     constructor(values:any, equals:any, compare:any, getDefault:any);
//
//     add(value:any):any;
//
//     addBeforeOwnPropertyChangeListener(key:any, listener:any):any;
//
//     addOwnPropertyChangeListener(key:any, listener:any, beforeChange:any):any;
//
//     contains(value:any):any;
//
//     deleteAll(value:any):any;
//
//     difference(that:any):any;
//
//     dispatchBeforeOwnPropertyChange(key:any, listener:any):any;
//
//     dispatchOwnPropertyChange(key:any, value:any, beforeChange:any):void;
//
//     entriesArray():any;
//
//     equals(that:any, equals:any):any;
//
//     forEach(callback:any, ...args:any[]):any;
//
//     getOwnPropertyChangeDescriptor(key:any):any;
//
//     hasOwnPropertyChangeDescriptor(key:any):any;
//
//     intersection(that:any):any;
//
//     makePropertyObservable(key:any, ...args:any[]):any;
//
//     reduce(callback:any, basis:any, ...args:any[]):any;
//
//     reduceRight(callback:any, basis:any, ...args:any[]):any;
//
//     remove(value:any):any;
//
//     removeBeforeOwnPropertyChangeListener(key:any, listener:any):any;
//
//     removeOwnPropertyChangeListener(key:any, listener:any, beforeChange:any):void;
//
//     symmetricDifference(that:any):any;
//
//     toJSON():any;
//
//     toggle(value:any):void;
//
//     union(that:any):any;
//
//     valuesArray():any;
//
//     static SortedArraySet:any
//
//     static from(...args:any[]):any;
//
//   }
// }
// declare module "collections/sorted-array" {
//   export class SortedMap {
//     constructor(values:any, equals:any, compare:any, getDefault:any);
//
//     Item(key:any, value:any):void;
//
//     add(value:any, key:any):any;
//
//     addBeforeMapChangeListener(listener:any, token:any):any;
//
//     addBeforeOwnPropertyChangeListener(key:any, listener:any):any;
//
//     addEach(values:any):any;
//
//     addMapChangeListener(listener:any, token:any, beforeChange:any):any;
//
//     addOwnPropertyChangeListener(key:any, listener:any, beforeChange:any):any;
//
//     all():any;
//
//     any():any;
//
//     average(zero:any):any;
//
//     clear():void;
//
//     clone(depth:any, memo:any):any;
//
//     concat(...args:any[]):any;
//
//     constructClone(values:any):any;
//
//     delete(key:any):any;
//
//     deleteEach(values:any, equals:any):any;
//
//     dispatchBeforeMapChange(key:any, value:any):any;
//
//     dispatchBeforeOwnPropertyChange(key:any, listener:any):any;
//
//     dispatchMapChange(key:any, value:any, beforeChange:any):void;
//
//     dispatchOwnPropertyChange(key:any, value:any, beforeChange:any):void;
//
//     entries():any;
//
//     entriesArray():any;
//
//     enumerate(start:any):any;
//
//     equals(that:any, equals:any):any;
//
//     every(callback:any, ...args:any[]):any;
//
//     filter(callback:any, ...args:any[]):any;
//
//     flatten():any;
//
//     forEach(callback:any, ...args:any[]):any;
//
//     get(key:any, defaultValue:any, ...args:any[]):any;
//
//     getAllMapChangeDescriptors():any;
//
//     getMapChangeDescriptor(token:any):any;
//
//     getOwnPropertyChangeDescriptor(key:any):any;
//
//     group(callback:any, thisp:any, equals:any):any;
//
//     has(key:any):any;
//
//     hasOwnPropertyChangeDescriptor(key:any):any;
//
//     items():any;
//
//     iterate():any;
//
//     iterator(...args:any[]):any;
//
//     join(delimiter:any):any;
//
//     keys():any;
//
//     keysArray():any;
//
//     log(charmap:any, logNode:any, callback:any, thisp:any):void;
//
//     logNode(node:any, log:any):void;
//
//     makePropertyObservable(key:any, ...args:any[]):any;
//
//     map(callback:any, ...args:any[]):any;
//
//     max(compare:any):any;
//
//     min(compare:any):any;
//
//     only():any;
//
//     reduce(callback:any, basis:any, thisp:any):any;
//
//     reduceRight(callback:any, basis:any, thisp:any):any;
//
//     removeBeforeMapChangeListener(listener:any, token:any):any;
//
//     removeBeforeOwnPropertyChangeListener(key:any, listener:any):any;
//
//     removeMapChangeListener(listener:any, token:any, beforeChange:any):void;
//
//     removeOwnPropertyChangeListener(key:any, listener:any, beforeChange:any):void;
//
//     reversed():any;
//
//     set(key:any, value:any):any;
//
//     some(callback:any, ...args:any[]):any;
//
//     sorted(compare:any, by:any, order:any):any;
//
//     sum(zero:any):any;
//
//     toArray():any;
//
//     toJSON():any;
//
//     toObject():any;
//
//     values():any;
//
//     valuesArray():any;
//
//     zip(...args:any[]):any;
//
//     static SortedMap:any
//
//     static from(...args:any[]):any;
//
//   }
// }
// declare module "collections/sorted-set" {
//   export class SortedSet {
//     constructor(values:any, equals:any, compare:any, getDefault:any);
//
//     Iterator(set:any, start:any, end:any):void;
//
//     Node(value:any):void;
//
//     add(value:any):any;
//
//     addBeforeOwnPropertyChangeListener(key:any, listener:any):any;
//
//     addBeforeRangeChangeListener(listener:any, token:any):any;
//
//     addEach(values:any):any;
//
//     addOwnPropertyChangeListener(key:any, listener:any, beforeChange:any):any;
//
//     addRangeChangeListener(listener:any, token:any, beforeChange:any):any;
//
//     all():any;
//
//     any():any;
//
//     average(zero:any):any;
//
//     clear():void;
//
//     clone(depth:any, memo:any):any;
//
//     concat(...args:any[]):any;
//
//     constructClone(values:any):any;
//
//     contains(value:any):any;
//
//     delete(value:any, equals:any):any;
//
//     deleteAll(value:any):any;
//
//     deleteEach(values:any, equals:any):any;
//
//     difference(that:any):any;
//
//     dispatchBeforeOwnPropertyChange(key:any, listener:any):any;
//
//     dispatchBeforeRangeChange(plus:any, minus:any, index:any):any;
//
//     dispatchOwnPropertyChange(key:any, value:any, beforeChange:any):void;
//
//     dispatchRangeChange(plus:any, minus:any, index:any, beforeChange:any):void;
//
//     entriesArray():any;
//
//     enumerate(start:any):any;
//
//     equals(that:any, equals:any):any;
//
//     every(callback:any, ...args:any[]):any;
//
//     filter(callback:any, ...args:any[]):any;
//
//     find(value:any, equals:any, index:any):any;
//
//     findGreatest(at:any):any;
//
//     findGreatestLessThan(value:any):any;
//
//     findGreatestLessThanOrEqual(value:any):any;
//
//     findLeast(at:any):any;
//
//     findLeastGreaterThan(value:any):any;
//
//     findLeastGreaterThanOrEqual(value:any):any;
//
//     flatten():any;
//
//     forEach(callback:any, ...args:any[]):any;
//
//     get(value:any, equals:any):any;
//
//     getAllRangeChangeDescriptors():any;
//
//     getOwnPropertyChangeDescriptor(key:any):any;
//
//     getRangeChangeDescriptor(token:any):any;
//
//     group(callback:any, thisp:any, equals:any):any;
//
//     has(value:any, equals:any):any;
//
//     hasOwnPropertyChangeDescriptor(key:any):any;
//
//     indexOf(value:any, index:any):any;
//
//     intersection(that:any):any;
//
//     iterate(start:any, end:any):any;
//
//     iterator(...args:any[]):any;
//
//     join(delimiter:any):any;
//
//     log(charmap:any, logNode:any, callback:any, thisp:any):void;
//
//     logNode(node:any, log:any, logBefore:any):void;
//
//     makePropertyObservable(key:any, ...args:any[]):any;
//
//     map(callback:any, ...args:any[]):any;
//
//     max(at:any):any;
//
//     min(at:any):any;
//
//     one():any;
//
//     only():any;
//
//     pop():any;
//
//     push(...args:any[]):void;
//
//     reduce(callback:any, basis:any, thisp:any):any;
//
//     reduceRight(callback:any, basis:any, thisp:any):any;
//
//     remove(value:any):any;
//
//     removeBeforeOwnPropertyChangeListener(key:any, listener:any):any;
//
//     removeBeforeRangeChangeListener(listener:any, token:any):any;
//
//     removeOwnPropertyChangeListener(key:any, listener:any, beforeChange:any):void;
//
//     removeRangeChangeListener(listener:any, token:any, beforeChange:any):void;
//
//     reversed():any;
//
//     shift():any;
//
//     slice(start:any, end:any):any;
//
//     some(callback:any, ...args:any[]):any;
//
//     sorted(compare:any, by:any, order:any):any;
//
//     splay(value:any):void;
//
//     splayIndex(index:any):any;
//
//     splice(at:any, length:any, ...args:any[]):any;
//
//     sum(zero:any):any;
//
//     summary():any;
//
//     swap(start:any, length:any, plus:any):any;
//
//     symmetricDifference(that:any):any;
//
//     toArray():any;
//
//     toJSON():any;
//
//     toObject():any;
//
//     toggle(value:any):void;
//
//     union(that:any):any;
//
//     unshift(...args:any[]):void;
//
//     valuesArray():any;
//
//     zip(...args:any[]):any;
//
//     static SortedSet:any
//
//     static from(...args:any[]):any;
//
//     static logCharsets():void;
//
//   }
// }
//
// declare module "collections/sorted-set" {
//   export namespace SortedSet {
//     namespace logCharsets {
//       const ascii:{
//         branchDown:string;
//         branchUp:string;
//         fromAbove:string;
//         fromBelow:string;
//         fromBoth:string;
//         intersection:string;
//         strafe:string;
//         through:string;
//       }
//
//       const unicodeRound:{
//         branchDown:string;
//         branchUp:string;
//         fromAbove:string;
//         fromBelow:string;
//         fromBoth:string;
//         intersection:string;
//         strafe:string;
//         through:string;
//       }
//
//       const unicodeSharp:{
//         branchDown:string;
//         branchUp:string;
//         fromAbove:string;
//         fromBelow:string;
//         fromBoth:string;
//         intersection:string;
//         strafe:string;
//         through:string;
//       }
//
//     }
//
//   }
//
// }