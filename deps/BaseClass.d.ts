declare module "deps/BaseClass" {
    class BaseClass {
        static extends<A>(a: A): new () => A & BaseClass;
    }
    export = BaseClass;
}