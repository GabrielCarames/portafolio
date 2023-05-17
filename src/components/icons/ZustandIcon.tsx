import type { FC } from "react"
import type { IconProps } from "../../interfaces"

const ZustandIcon: FC<IconProps> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 496 512"
      className={`w-8 h-8 ${className}`}
    >
      <image
        width="100%"
        xlinkHref="data:image/webp;base64,UklGRnIRAABXRUJQVlA4WAoAAAAQAAAAfwAAYwAAQUxQSKkEAAABkAXbtmlHK2wrZjtdtm3btm3btm3btm3bSZtxsj/eu+fdu/fp/4iYAPCvfD3qc138v113km3r/1aKZ2T3QwLdJZm6c4iHKYfJsKrmAt8TEbUxoT0Z99HcXbLb1SZbh2krTjy+e2n7lFpJzikM0lsXMizguegTqUbHKrTX2wWjv5FkemGtpSGGH121VpHDWmi9CodCeivOINxXbwGx1tEbf63hBAN65Kq1NRxokc7KEc8yCMnspKk7TM4v+Uf30ptQqkDz617CuhLb86/pkZtDfpEUTY+TmuLm6+GRkMdLNqFH398Oa+wQLhARvfRwJM+ITftuv3ry8emGqS08LGtKbOOe375L9R2qS3afJlVJO/70N4qPiiP7kdvzW7SLD/15S4+gHnLt2B979DKVgeeIUPrzO4YM44mItua3ohQx/viOGthxTpM3kU0JUg0NtlPrKYX/IxPnOZmW+A2nP1fqAEg87Mr3OHq1tI4zqilRCZu19C2CzL2S3qzVxDk0CYCNZPww8zqlmgDcLlJUPJn9Jb85nYj1t6TAIApdMnvjvlAiol/3jaLCqRjgeZWiyMq6ZuQm3pH+gI877A4h9W7I4o5UHyierG1kwl5uPlAtqHQUtufI8tgQhzIR8zdQDvinstWmBTE87dBQbmeVMv8gxSuwvc6Bmjrg/YXbdJVCcaT6PSWA9sTyjgPtiXsleFXrP2xsncSoRA7WB3COB9VU283tcYn9ZPfl7O+OzAUKENPdShmIe9gXMj18TopJXML9VPqxszY2hgt1UDmvFcZLFVL8kBbxW8ZZhUIk/c1HGbcU+okLj5bxVGGFOOX4eEavFE7rZHvwmGg2LxQe6mQAshPbZ0Yu73WSFRn43Dby+KuR84DLezZnjAJjNVIOwCk2C428IvQxDwBGsKlh5B6qjXOwzc3laxIjlw+6CPO1g5NM1sE45S9N7PaE/XZMCiuEkBYP5oXiYxaHoZhZVOSLv/Tz1dUpmaDcgUVelYBoQa/ywDNDYjh+hUEbqGYkuYNhdkiUZUuhHBAlph3ML27VMTj4Wso2WFnTmqtw9IaU8paglBVH4fBeIc9hcebnpk2H44uFjLUKGGzOzcwwcaCQvtYhYIljrxrA1LpCKLt1QKrm++IVPm1vBJNzSXnszACAT5l2w+ft3TymTRE3mO70RghN4cFzt5SYtNroIoX26aLYHjFUSQdu48NI8GoNBDwn0c/lebwn4SXE9SXpPcTdEbdM3GtxJ8RtE3dF3AJxXxJJmysuKlDaJHH/xE2R5y9tjLwAUSWaoIu4Px6ShhGtaCzurbOkp0T0KULaPUgeSzo8IMrntw6GiUIfHVSThQPyovyFJX4h7V4pV2Hw+yBsOOSnfCYrnwYwjV14uMpd6HAKu8X3VfprYR63D01+qqTXwmhuW6uQ4iFosRe3SllUKulhCLP3CFK4Az1OZNYLuGzUWxMzeYUlATL+s3ccmpzDqx0AVLGzCbocyGow7CZrvGBcCPTZPMy6Zy/sLA2GrpuesyasG/xuRt/ulRQ69+u4659J37c0dgLg5Ab9uxbqMGDW6t1nLt9+8ebFs3cfnt86t3JidWdoHQBWUDggogwAAFAwAJ0BKoAAZAA+kTyYR6WjoqEuWPuYsBIJZgDQFjXeXl1+v86myv5fgwTPW8/Rrtk/MB5s3os/vfoudSj6AHSu/3v/r4QB/Ve1H/F/jp5v+Z/4ZIkb7sHP9t65f6DvT4AVyPsNgAfWzv3NQ7w90Zf8PwffOPYA/nn+I/63qf/+Xlf+rPYI/nv919OH2G/vJ7N/7Otr/5CUd/VzqfgVvJ5EZpRtHYDW+LdoMNEupmjiLtsCitFhHi+te/vQKz4TkWfqOBkTqDowQyC+adPtmZq+ycDlfLJVbt7mk9KaLFp3+tQ9Gjy/AAbuq/ZeZtu34kSD1EoGhNFQA8540Dpl01B7vEZ3wRl8DSb8pswsTSV2zpywPaFeq8r7+F9+pFXtikgpIOIiMPkeDRpfjh1Cocs8+8fMZNpPfvyTzmay+u+y7Yu8wnU9K6cZKQl2LfJYcIDe19NLX4hUo3QPYdwsqcAW65IxytmZHG+g/Uc1LFysVuojMT0wThHe4X8Fc+bqjmHBJ7TGb5iztLgAAP7+Bu9BtIBeCvmiKzDvN3kNZ3d+3wphJDMM8OYWXWkbrFycGPafuxYebUirA3XsyPd3J2OS9t8D7muOsi5SPcd0H/0VI01BRbMiZGjKwAwKDbgvsann1FJDJOY0M0vai1LrM7U4n+hfE2E4rY80OPgVbwFkTc4ex3ZeUuKBLyVnAiQ8oM75mvGoWXU/WRgc7aYNIxvdljs98LAJzzFnN8uVprx8t5xf5yOHz08FGfN6GHZiNZH0peYs6c5/AUJ1npst1z0WTvnE49ko6/Dyo8kQtL+tOqmIjgTa449ylSsEZwDrnmfPopa6ud8N2Ck3E2FveotZxP8OLt3wvLkqyM8/zfuGPzJ1wrwCcStGMgY6prlz1yleVCvtTUk7jUIfhQOQiFgM9iUoOXZUm2fcJibjWQkDpZrN2q/DYP9vWt7Ar+qZKcRzQ0SN4EbwsGF3NeFNfrql8tEP8dQMKQAWMtJSZr/QCXTeMVTfZVGlbCXPW37x3/niT1LXHrzAmqSBs3uwaWMHYtA8q9GuL3z7ACiC98xkBK0uswLh613+YAxrfkRyrhaotboVElyG/j/F+Y50rcOOPUjBJtCJF3jhkEfDFuAZzK31QpcdMLNYh4mozGhNkJDjwFK1cNHHh+N1o0i2joulN4cYH9pYo7TxihBcS8SAuZpJCtDzI5ZJKo3EU4QOjd3cupsSwJQynYsJH1gAE8uYfKujJSl6mv4UZuzpaoyH2YHAXt7vnP6dF3v+z84zOQC25wYX5Ok/XZ5f2GGiCOkUtPj7GSbghWhVwowEbKX5IOQ5Jx3coklBxnP1JWenGgkpqGFQ338PKFEseh9EeA5b0stsXkgIiaik+jfT99ujqkj6cFd7n8NTygMCf7p2FDFoYn7sNhFu3uccIm1DFE2G+rUOVoZt+HqNQsiIMiBR5yjNDd7SLl9a2kDuj0+VuKUznyyo9O6VGwbBfyuk+khlIDr1ZqG3Ga0vvk7P4ydUwIaq4GbTqNqWCyZqR0ahARjZXd2doHUHWz6znwnJ+FzTnu0kci+aBz5qQxA+9f0BBL93w7iSccIyWqKsHCf7GJLP8UftsN2s1U4VfEkU7RVPzwTheLg1x9scSnDZ9ZgSHzcws6Xn1crfWHP00hze1csjjw9M23IzX2/MzRcDv0RKDygZc85fAUXDTkJmTpxuEVrXgtPS2jTiXpf1Gwt5e8HErf5NjR7r63mdOpe3/11e9WDPQPUrMLtHRI1FNzE4XL7hjG6nsm+CI4jPwE4Gb71vwvX0q/4naHWELUciv6nzBYSQve8jk2fq4ewZqhFtPeFxdrdNLIQO7RA8L13siPbix2mifpnzv1rTX8VAYt4yvD7Wg4tx8kpEFdsUUIoW/Eawo6zYWfkBLgDEFQMF4VHid2xHtQkxqFO1pbg9oaZJinQjULoqt9QpZ8b5ujFhn39OzDBGbfeapZx5RkWvGrQdXj6u0sSd3KMTGXat33ApUIGr/kw8BMfwoH8z2XnEQsvZpr9SrofV0w7jxpzFlmmn+igA4MNatQepQjMuqyRbsQgK/65iBcoLMm5g3nUtO8ncRMSMyvn1AOQm4zqg1dFevPMLX/NquJJ7iKv7QQ67YIl0tUoE1LcBEc064ZBb/4W7gtZAZpt01GQ4TW7xPfRV360+FALOy/q9V9uj61+j6vJnjTTMty5FWHvl+cYqSyq9NsWcQY6VVNjjkRgPjCevmUDlFYZlyu39Qzat1T8hwbc11ZC8Mrn+orzcWl39tHxsM1mFDHV/sWo4nleY4xqToFsAM7BLLsjGfKGf4/xrjg/22oFi70ZYpfCcvneV85i7Vu8clSMOAqzWOThZQuVI/u5D5gu1gN7uCkfKy9Hy6l9nLzBYABLNyF5YijAf36zjykoazvoX1D/8nKm8RF3EA3nBI+cSbFTwgydSGmJDQunVVzm8ne9w/nwV+loo8/BB2wc/r0oD6Kih7gjYnDADyaDuAbQTd/84NBs0WKgIbMSHvmVE6HBZYDlYw50U6KmQTIV33Ef28tGQXVUCA8Tg5V0TEOGqjEI4nKbb2pTUr+xJggxNemjlAmi3W66CeKquh+st9io7t+TTadY23amSw3fP1z+oNb67FN8bMfQ++ReXsNq1KCk36G1QwJ66kzqod4ld9tCKF3tyVpXv3LHDrZfzLpocb880j/8lyLaJl0TfnoFMSsCQ87MCDZcQqK+RjcnzaLvouD++vq+InFQJPcN43ECw3AL6EsOzFtkhY9HaajO+4CruOK8W1Pkp1gCMCtAlDKKyDi3TeuuvX6Qf5f4Xd6lXO6/3Ms6cqCN+szaKUTGj/CaVePBq6WS8PXHSbhypAkJiSqB98TLnzvhfe+/IaXFiaTiIaESQpr1eW4cbYAtkOe6WW2Hz+U9QcndYXPPXpYsI8zLgyIEPKTbvfbxxdKQs3bmOea1jVoLNyy9rXuhjRZcFg0iLRrB5B8lEeRQOoLZwyP9RZf3B3d00V5/PiaRxjdq9Q/iMiQeKUyzyUMbUbSqyjAMxmOqq1+bqAWTeWBt4/vtm9l0RTnsrGO1lV9FyDCG9ELap1FxuzNramAIRjs11DTGdTMflmDMSWxjqsJbMbVBl8+JaC6iy4prLLuT2MaHDmeGybnLY320yDL9E2Lz6vV5tmfDRJSU9nqTaxFYpfo1/1nY7FJ3XZVfb02hn6btUz3F1ReR31XoEPW1PGMvx4Nr4OWsGHATj5KxzpXgSes8Fr70lm8TDYuYQJULm6aRBV4ekrrcZ4DKRVeINb/YHsM/nqoOWbOJIDz71kvIwMBwIaCPZAy+EYgUrd49qF68G8c1gcHGXj8kSdD+GaWmknl1Ckg6+EFOIWzkohnNvRqeQJhse/iGsxOvJ0xRiDIL4qlQbzshi4LX6vd8cD+4TgYDnzqYxHupbvNftezHKl4OHdv9pNaCdxNfVjGhXFTmmopp8kZ/V/GB7nLeL7WCK//1a3eF6V/NZ4+MRT41Oif5tck23uR+RMLVpfSHn6pCs/i7o1h02g4hPQBjK31YyUMeSs8+1UgQ4YsJ+DKOO4mRf5fRO7PSOWeIKQC5pG3OjCSEnOMRS+rLroO2i1gn4bDCtTzpcsPx9IU17xFoS1oSwktfVxTKV/XNm1josn2fls9/E572h1MFpqpMn6B0GQs52y9bAInDYV2UQZiOgcfhMar/x/lWBuhUltvOnRuczGs/RnpcCoWshLcRypqD4CBUytUx0P7G3lX7kcp1gK5jZp7Pz77RH7jnn10Y3lB9r5h9EN6dVel0oBKhaie9MYmqwBNFgn8IuVFQF/2QE4Yk/W6v6/8eppvNpxQYVQ4+j/pQKjT2/lku+LHqR9O74hhklqhRlJm1QXA+ZZPZuo2pv2VM5lF8hp91YN3Fn9l7vke851upcXNzqFcj/JhPyzpzQZF0Dy76Tgg0cqlw4uhzF663ve0e0U8EOYlOFeBFBbDBP5qieW/hVw+HY/MAK+SlXOgQVZIsG5IOa+FkENS8IgSwX8sonI2isRwr4SRjnEko6BhdUPxI0+iu3NbwmQzsG6peX3U5jxWTr8eB7FanaE5j99vyXw6sqXL8BLSsRJvLG2yeDhlCBodH2zQdvG6F6wzskQKE9MnnRbvDcJVOkrc1+rT46TOmq0RhkvU54Cv7AycNyiFh4a+Vk1HNKXRBNaYlgP80AC2iMSym9d3yWMdOos2O3ifCJWMqZrMKf+zukd2nk3fwCRNsbgDEE653tr6rOohfVpD8qgM+Xn2noC+9fHO8JLTK/qyQODD/iz0xwAAAAAA=="
      />
    </svg>
  )
}

export default ZustandIcon
