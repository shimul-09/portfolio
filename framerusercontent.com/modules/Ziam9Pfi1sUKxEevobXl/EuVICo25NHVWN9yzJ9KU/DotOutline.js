let Component;
let IconInner;
var Icon = (React) => {
    if (!Component) {
        Component = /* @__PURE__ */ new Map([
            [
                "bold",
                /* @__PURE__ */
                React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", {
                    d: "M128,96a32,32,0,1,0,32,32A32,32,0,0,0,128,96Zm0,40a8,8,0,1,1,8-8A8,8,0,0,1,128,136Z"
                }))
            ],
            [
                "duotone",
                /* @__PURE__ */
                React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", {
                    d: "M152,128a24,24,0,1,1-24-24A24,24,0,0,1,152,128Z",
                    opacity: "0.2"
                }), /* @__PURE__ */ React.createElement("path", {
                    d: "M128,96a32,32,0,1,0,32,32A32,32,0,0,0,128,96Zm0,48a16,16,0,1,1,16-16A16,16,0,0,1,128,144Z"
                }))
            ],
            [
                "fill",
                /* @__PURE__ */
                React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", {
                    d: "M156,128a28,28,0,1,1-28-28A28,28,0,0,1,156,128Z"
                }))
            ],
            [
                "light",
                /* @__PURE__ */
                React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", {
                    d: "M128,98a30,30,0,1,0,30,30A30,30,0,0,0,128,98Zm0,48a18,18,0,1,1,18-18A18,18,0,0,1,128,146Z"
                }))
            ],
            [
                "regular",
                /* @__PURE__ */
                React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", {
                    d: "M128,96a32,32,0,1,0,32,32A32,32,0,0,0,128,96Zm0,48a16,16,0,1,1,16-16A16,16,0,0,1,128,144Z"
                }))
            ],
            [
                "thin",
                /* @__PURE__ */
                React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", {
                    d: "M128,100a28,28,0,1,0,28,28A28,28,0,0,0,128,100Zm0,48a20,20,0,1,1,20-20A20,20,0,0,1,128,148Z"
                }))
            ]
        ]);
        IconInner = React.forwardRef((props, ref) => /* @__PURE__ */ React.createElement("g", {
            ref,
            ...props
        }, Component.get(props.weight)));
    }
    return IconInner;
};
const __FramerMetadata__ = {
    exports: {
        default: {
            type: "reactComponent",
            slots: [],
            annotations: {
                framerContractVersion: "1"
            }
        },
        __FramerMetadata__: {
            type: "variable"
        }
    }
};
var DotOutline_default = Icon;
export {
    __FramerMetadata__,
    DotOutline_default as
    default
};