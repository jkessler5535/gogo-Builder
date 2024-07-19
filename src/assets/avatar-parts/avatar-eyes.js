import * as React from "react";
const AvatarEyes = ({className, ...props})  => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 600 600"
    className={className} {...props}
  >
    <defs>
      <style>
        {
          "\n      .cls-1 {\n        mask: url(#mask);\n      }\n\n      .cls-2 {\n        filter: url(#luminosity-invert);\n      }\n\n      .cls-3 {\n        mix-blend-mode: multiply;\n        opacity: .1;\n      }\n\n      .cls-4, .cls-5, .cls-6 {\n        stroke-width: 0px;\n      }\n\n      .cls-7 {\n        isolation: isolate;\n      }\n\n      .cls-5 {\n        opacity: 0;\n      }\n\n      .cls-5, .cls-6 {\n        fill: #fff;\n      }\n\n      .cls-8 {\n        mask: url(#mask-1);\n      }\n\n      .cls-9 {\n        filter: url(#luminosity-invert-2);\n      }\n    "
        }
      </style>
      <filter
        id="luminosity-invert"
        x={280}
        y={351}
        width={91}
        height={148}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feColorMatrix
          result="cm"
          values="-1 0 0 0 1 0 -1 0 0 1 0 0 -1 0 1 0 0 0 1 0"
        />
      </filter>
      <mask
        id="mask"
        x={280}
        y={351}
        width={91}
        height={148}
        maskUnits="userSpaceOnUse"
      >
        <g className="cls-2">
          <image
            width={91}
            height={148}
            transform="translate(280 351)"
            xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFsAAACUCAYAAAD8iFX4AAAACXBIWXMAAAsSAAALEgHS3X78AAARiklEQVR4nO2d63aqShCEO3JRTHbO+79mREEEc37s1ZOi7B7G+yW712JJTET9qKnpniHMm4h8y7+4Sczu/QF+U+T3/gApkWWZzGYzeXt7k7e3t/D89/e3fH9/y36/l2EY7vgJ0+LhYCtYhZtlmZRlKUVRhOc0FPRut5Ou62QYhgD+EeE/DOwsy6QoCinLUubzueR5LlmWSZ7nYT/LsqBuVfUwDNL3/Wjruk622630ff9Q4O8OW2FWVSWLxULm83lQsv4uz/OR2mezmez3+5GFIOztditd1wXobdvKbre7O/S7wVYlL5fLAFphF0URNlQ128h+vw+bglZLUdBd10nbttI0jTRNc1foN4etkKuqCqCrqpL5fH4AuyzLAJphY+eo6t7tdmFT2LptNhtZLBay2Wxks9nIbre79Ve/Lew8z2W5XMr7+7sJWze0kaIoDjpNDbUStpHdbhdUvd1upWma0cksy1Lqug6d6s2+/63eqCgK+fj4kD9//sjHx0eAvFwuRxZSluWBZ8eU/f39HTpCC3bXdbJYLKRt23AytdXUdS3r9Vr6vr8Jg6vD1tRNIX98fMj7+3tQ9XK5DBAWi0UAXZblCDbm2ZiNqLJ1UwvRR4Xctm3IdNCiZrOZ1HV9E1u5Kmy1DYWsG1rJYrEY2YjC1g1V7eXZ6NmqbFU3qppbDaaTq9Xq6sCvBjvP82AbqGoFvVwuXQthIJr6ecru+36UkWj6t1gsZLvdHhxXTyIf9+vr66rArwJbQf/3338B9J8/f+T9/X0EmjMRBmL5daxcV9/uuk7m87l0XReOqfZh9QPYYq4J/OKwFfTn56d8fn6GffVqS9VVVUXVlwpbVT2fz4NnK+imaUJ2w0USx7WAXxR2lmWyXC4DaLWQz89PeX9/DzbidY7acbECFUzMsxk4qrpt2xFoPSaW/3zca3j4RWFr1oGbqhqV7aV8WNDguAiC9pTNnl2WZegkMV9n68Bj4vEU+CXTwovBLopiBBY7xim/VtAxv06Bjb6tNoLjK5b/W3k7tpa6ri9W+FwEdp7nI7CcgaiFsF9zVWelZVYmosGAsLhRNW+329FxphTNx+m6TpqmuQSm82FnWTbqEFHFFuj39/dRx8igPb9OgV0UxSjf7vv+YGyFWwgXR9hCtDjSlnJunA27LMsDq2CPRtBqH+zXXMigElNhK6gsywIsqzPE8NJHBazqXq1WZ9vJWbCLohhBjhUvCBphY3nOoGN+reH59jAMMpvNpO/7MAZ+DGweQey6TjabzTm4ToedZdlIxZxH86MFOubVCNtSNcNSYPo6hY0TDiISLfe9WR+1E91OjZNhq31YlsFZB3q059Wxys4DraGw9TX7/X70Onw9lvqx2R6Ei+Pj59jJSbC1SlSgqmDMoVnNlqK5hOZq0VKjFQgQLWPKp9k+2K/RQnCK7aawy7KUqqpGSlagbBsI2CtgYkOpqcEDVPocPmrE8nMPdtu2slwupW3b8DfHxtGwLVWjN3uWgQNNKWneqWFZB4enasyt0Tp4iq1pmtvAns/nB5kGQsaChae6LI+2LlO4RKANaVg5tTWuYllI27aj1tt13dHAj4Kd57mbXXBViKndVOFyadAaMeBlWQbI8/k8jBb2fS+LxeJgAkItRGfqT5lOOwq2qho3BI77ChhzaQSNA0PXAK2hwBVynufBQhB4WZYHyt5ut1JVVbAPFNgp6k6GjapmsNgJegNLOqfojVNcM1jh+/1e8jwPj2VZHthI13VSVVWYMMbvvFwuT1J3MmzNQPgSBM42UM04uRobfbtFKGxL3cMwhM+pw7M60zOfz4O61bcR/Ha7TU4Fk2Crqi0ls6p5EoD9mUfxbhmq8CzLRupW4ApbZ3pwHlO/G/dVOviVEknXZ+d5fvBGnqoZtDVxq9utQ0+wAsdhXPy82pmjiLAvwseiKJLfP+kbF0XhqhgzDS/r8C4hu0cg8NlsFlodgkbgbIsKHjvKPE9z40nYloXwDEsstXsE+8Bg0KhyCzp+Ty7SUHwpMQlbz6zl1RZk7QxTLkW4VzBwBK3ZCYJmUWHL1i1F3VHYXMRwRcj7XmV4qVL8ksF2gupma7GgI+iqqpJgR/9CO0b2aM82rILllvn0MYHFjmYlCFtn59HDreEH3T9b2dabcNESG+/g2ZZHC0vd+B2mOk4UYYq6XQL4rxfWtXhTHeIjejUHgrasBNNB7jQt8Z0F22oy/G8YbCGeVz9qqBDws8agY1XMVpJlWfS9XAr67xh8YHxDD7J3udgjRqzQ8ayEbQV5xCKqbGwyXBWiT3uqPmXG5R7hebfn4VYRl+LbJmz1a4RsdYRWhfjIGYgX7N0WdLZMr+M8CTZ3gJai8exboJ/BRkTGU2lsJ56lWJsy88KF7R2QbSN2BdMzBYK2qksPvFXoeOqOwuY0j9+IrePZOkcOVrg1boJFj6fuZNhaNXpTWbH0ji9DeCbYFmgGbimb7UVbuBUmbK8qZNtQ0LqPF8Y8azBoy0qQgbV5+fYBbBzj9Q6EZzmm7GcL/czYwccUbk08HAXbai5WB8EfJHal6DPFlJV4nSV6uVe6m7CtDMTKp1/FrzWsizG98ROEbZX3k7C1c/RmWrys49ny6liglSBgnNlBL7ege/3WAWxLyRZwfWM98LP7NUYsM2GxWa1df88xesYaF5iyjlfoGDliVoKtOwY9GXYMcIpPPzNwD3QMuJdMcMz4jazUj88kjui9QsdoRQw4svA6SCsjSVI259N4lvHDvFp4Pu0pHPNuq2wfEfJ82vJoz0ZeQdmxFDClc/QykgA7z/Mgfc/88edXKWK88IDH8m5LoBgj2N7lYlPV4iupmsNLAa2hCubmKtv6Yy/7iIF+BeDWd0op49kVXNhW80j1aTzGK4WXkaQUPFZLn/GBYwr2FP2qFiIiRwFGdkl5tpVLTtnGK6Z9seLGKnC8fg3DVPbUG726mjn4O2NRF/NxF7Z34ClVW/uvEqnpnwecq8gDG/HehJ/Hs/ZqkEUOv9MUeMteNEPRiCrb+tn7u1eNGGQPOqteI9qzcVqHB/wNMSWwqezsKNj6BinZxiufAK9le49eEjGzXjxlHdb+q8aUd/Nz3utEnA4y5U1/Y6QwiPVjr1eN3DiOEeE/2BcOvJMPx8z6I37k/X/xEx4X6/kDZVvA9/t92Mfn/52An8C79HiMLmIjvxE8t3re9DZ2UdjWC62D/MawWr2lZLzvlAvbOggfEP/2NyjaAqqPqF7exzvzaEwqGw/Cz+NrfkNMtXpWNd9D6iAb8eBOdQCvqPIpX/ZAo7oxDmyEby7oNRWEiyp/lfB8mZ9L7RxFHGXj2fGe+y2eLeL7NLLxHAFjBJvh8qa9a8qBXyE8xfLdLi3wVms/gI23oucX8wl5ZeAxP/bgWpwwAmy+CSyq2TuQBfiVgItIEmCLWdRGNC/ku+5a0H+DskV8dVugkR9ywgiwdfEzBD7l3XgGXwl0LK3TDcEiL87iMEapH58dPGMxb2I/e4WIgeYWz8pGZhgHeTaXmvoiT+2vaCMWaE4cLLi8EgjfFHcEO6WTtFT+it7N/ZKlZFyAiO9SrLfrx3CVPdVhxoA/c0zZh2UbvNSKt9y4qWyreVjwPVW/MnDsHK1b9yMbjhFsPTO41JOncK/4efawQFscePEg3JJh6+oV/GI+a1OV07OqWz+79T3ZOmLQre9/MJ7trUBkvRHbyauAtiyEvRpbv8XMuj3/AWxtNl7ziHWWz+7bKR0jM8FlVnBtmyTYmCtawD0vZ+jPGgzbsgtmxI/eohMmbF4s3gLtdZjPmgam2IclRGblpX0ijme3bRs6SmwinsJjlvIskWIfCFZXZmLQsbVrzOtG2I88W7E6zWdNA61KETMxz1KPWXfMhK1vYG0WeM+3n0XdqfaBFSJ3jFOqFokoW20EV/rEfYUe8+5n6SxRGFywWa3cAq7PxVq0C7tpmlHz2G63psoROg5SDcNzjHWjqhGy1QkidOSCojxa2SJysEQfNxkGbhU6z6BsLMasVsqdInPBFVCtkT4MFzZnJXhgy6cs/8bq8hEDW562Sqtw4YIFgSOfqcWUo7CbpglnzALPSmcf5zL+0cIbq0bIHnC0ELXcmKpFJi4ZVm9iwAx6qqR/RN9mr/ZKcqtV46OKMGWp2STYfCa56TB4VTfP7DwS8KmO0UvtLOCpi3BGYfd9L5vNJtiJnsmYh6PSrRL+EcJStTfAhILD9Xx5Oxu2yFjdCpyVbqmbq8xHUrc3p8h5NALm78/efRHYmpWgsnXz1M256SMBR1VjH+MNmVrAkYdmJymRBFutBO2E1c5eblWYj2AnXvZhjUujbXCL1lWqUy1EJHFZWU1v8Kw2TROWwVLQuvhZ13XhTmq73S7coaDv+/AfsN/f3zf/r2FvnJoLNQsyf3+E7Q2pciT9t9hut5P1ej1SeEzdloffe9wkxT7QLvT7IHAF3DRNYJFqISJHrE692+3MM4vLFrZtO7o1pnWPQFW3yO3uvuN1iNZYtNX5oYXqvm6pFiJyAmx8o8ViIW3bhsfYcoV8Cza+b8c1A0f0rPSO+xu2DkvVm83mKFWLHAF7GIaDs1pVlWw2m4PVTvmG5949ATGuBdy7DMEbUMKMQ/c3m83ZqhY5ArbI345ys9kcrBPZNM3BOmTeMit8g8HRzU8uDNwDzWPSVi6NHaACP9WrNY6C3fe9rNfrABvX9Y0txBm7N+DB7dguAJwrRC+HZjVbmQdW0Ggjx6pa5EjYIj+ZiSo7Zb1165ZsGPv9fnSXsHM6Tg90LOuwCjbuFDebTcjITlG1yAmwh2GQuq7d9XynlsSy7ANTwO/v76i3e+Fdo2dNzlqFCoJFwGwfp3i1xtGwRf6qe7VajdZgtxbjVL/2bpxrAcvz3AXOr9GTxKC9oVJrIsTzZd4/x6s1ToItIrLdbmW9XpuroHqgLVgIKc9/luSOpYrW662xaVQ15s+WinUfFYygdTtV1SJnwO77/sBOYuv5xmDhmAlWmHrnR0vdqGrrEgTLo3HYwSpSFPR6vQ7+rF69Xq/PUrXIGbBF/tpJXdfm8lisbAs2Q8aTpbCHYUhSdqw65M6Qlctgcb+ua1mtVtI0TfIYiBdnwdZUkDtHXmSBYcWuqyuKQoZhSG4ZOM9pzYijhWCmwV6sYPVR98/NQDDOgi3y01mqqj2/1YhdA62gYy0jdsKskTzsGNmXFaSCxX2E33XduZhE5AKwRf5WlnVdm16tOTVDYkCqaq0+rcUasJPl6z2sAkaLl9j4Rl3XI8tA6/j6+pL1en22fWhcBPYwDLJeryfvIh+7pq7veynLUvq+H5X6ViepYY3mWRbCufR6vR51hKvVSlarVYCMP5+TfXBcBLbIT3bipWoeaG76vDDzbPZ3mRLvxKGqeZBJYfOgElsIgla/Xq1WF/FpjIvBFvnxb69KtEDrNp/PR7M8vPr1VCvh6/PYQqzKEDtDVvalQYtcGLbIX+BfX1/hZ68zVEVjs/dKfrQSDJz5sUb0eJLW8mu1kbqu5evrS1ar1VFTXcfExWGL+MCtoqOqKtntdqHs56XHvfTPO6Z1vQfOtnA+jWr++vo6a+xjKq4CW+QHuHXtM/uqgu66Lqg7NkQrMg2bL6jhzlGzELSRa4IWuSJskR8Pt0biUIFVVQXQPNtj5e0i9gQuX5/HVaOXX9d1nXyhzTlxVdgiPyW9glGP1ll4BaIjiDyoFVuri/sA9H8cRsXOEatCVbde33LtuDpskR/gChsHhpbLZYCtns2d5DE2gp2jVczwINO11YxxE9giP+Mo1hWgOJ/pjbPwElLWmIg1E8PjITjWcQs1Y7yJyM2vBdNM4+PjQ6qqCnOaMdhcRXJR4w2pIuz1en3U5WKXjrvA1sjzPMDWcXHsIBG4N/ngTepakwXakd4r7gpbREaLVyJsvBxiyrNR2erZ2gnrz/eErHF32BgMHrOR2OQBDkJtt9uD/yZ4lHgo2BhTM/Ii9tTYI8HleFjYrxj/1qm5YfwPYhhDVl3NxkgAAAAASUVORK5CYII="
          />
        </g>
      </mask>
      <filter
        id="luminosity-invert-2"
        x={399}
        y={352}
        width={82}
        height={132}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feColorMatrix
          result="cm"
          values="-1 0 0 0 1 0 -1 0 0 1 0 0 -1 0 1 0 0 0 1 0"
        />
      </filter>
      <mask
        id="mask-1"
        x={399}
        y={352}
        width={82}
        height={132}
        maskUnits="userSpaceOnUse"
      >
        <g className="cls-9">
          <image
            width={82}
            height={132}
            transform="translate(399 352)"
            xlinkHref="data:image/png;base64,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"
          />
        </g>
      </mask>
    </defs>
    <g className="cls-7">
      <g id="bg">
        <rect className="cls-5" width={600.22} height={600.22} />
      </g>
      <g id="eyes-1">
        <g>
          <g>
            <ellipse
              className="cls-6"
              cx={325.19}
              cy={425.28}
              rx={39.46}
              ry={68.05}
            />
            <path
              className="cls-4"
              d="m325.19,360.74c19.86,0,35.95,28.89,35.95,64.54s-16.1,64.54-35.95,64.54-35.95-28.89-35.95-64.54,16.1-64.54,35.95-64.54m0-7.01c-24.09,0-42.97,31.43-42.97,71.55s18.87,71.55,42.97,71.55,42.97-31.43,42.97-71.55-18.87-71.55-42.97-71.55h0Z"
            />
          </g>
          <g className="cls-1">
            <g className="cls-3">
              <ellipse
                className="cls-4"
                cx={325.19}
                cy={425.28}
                rx={39.46}
                ry={68.05}
              />
              <path
                className="cls-4"
                d="m325.19,360.74c19.86,0,35.95,28.89,35.95,64.54s-16.1,64.54-35.95,64.54-35.95-28.89-35.95-64.54,16.1-64.54,35.95-64.54m0-7.01c-24.09,0-42.97,31.43-42.97,71.55s18.87,71.55,42.97,71.55,42.97-31.43,42.97-71.55-18.87-71.55-42.97-71.55h0Z"
              />
            </g>
          </g>
        </g>
        <g>
          <g>
            <ellipse
              className="cls-6"
              cx={440.05}
              cy={418.12}
              rx={35.09}
              ry={60.5}
            />
            <path
              className="cls-4"
              d="m440.05,360.74c17.66,0,31.97,25.69,31.97,57.38s-14.31,57.38-31.97,57.38-31.97-25.69-31.97-57.38,14.31-57.38,31.97-57.38m0-6.24c-21.42,0-38.2,27.95-38.2,63.62s16.78,63.62,38.2,63.62,38.2-27.95,38.2-63.62-16.78-63.62-38.2-63.62h0Z"
            />
          </g>
          <g className="cls-8">
            <g className="cls-3">
              <ellipse
                className="cls-4"
                cx={440.05}
                cy={418.12}
                rx={35.09}
                ry={60.5}
              />
              <path
                className="cls-4"
                d="m440.05,360.74c17.66,0,31.97,25.69,31.97,57.38s-14.31,57.38-31.97,57.38-31.97-25.69-31.97-57.38,14.31-57.38,31.97-57.38m0-6.24c-21.42,0-38.2,27.95-38.2,63.62s16.78,63.62,38.2,63.62,38.2-27.95,38.2-63.62-16.78-63.62-38.2-63.62h0Z"
              />
            </g>
          </g>
        </g>
      </g>
    </g>
  </svg>
);
export default AvatarEyes;
