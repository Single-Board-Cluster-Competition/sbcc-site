import Dall_E_Image from "../public/img/DALL·E - super fast computers competing.png";
import HPL_Icon from "../public/img/HPL.ico";
import Hashcat_Icon from "../public/img/Hashcat.ico";
import Dllama_Icon from "../public/img/d-llama.png";
import Question_mark from "../public/img/Question_mark.png";
import { StaticImageData } from "next/image";
import { link } from "fs";

export type Benchmarks = {
  title: string,
  desc: string,
  link: string,
  image: StaticImageData | string,
  bullets: Bullet[],
}

type Bullet = {
  title: string,
  desc: string,
  icon: StaticImageData,
}

const benchmarks = {
  title: "Benchmarks",
  desc: "Participants will be required to run several benchmarks to showcase the performance of their clusters. You can find more information about these benchmarks and their requirements on their respective websites.",
  image: Dall_E_Image,
  bullets: [
    {
      title: "HPL",
      desc: "A Portable Implementation of the High-Performance Linpack Benchmark for Distributed-Memory Computers",
      link: "https://www.netlib.org/benchmark/hpl/",
      icon: HPL_Icon,
    },
    {
      title: "STREAM",
      desc: "A simple synthetic benchmark program that measures sustainable memory bandwidth (in MB/s) and the corresponding computation rate for simple vector kernels (in MB/s).",
      link: "https://www.cs.virginia.edu/stream/",
    },
    {
      title: "D-LLAMA 3 8B",
      desc: "Tensor parallelism is all you need. Run LLMs on an AI cluster at home using any device.",
      link: "https://github.com/b4rtaz/distributed-llama",
      icon: Dllama_Icon,
    },
    {
      title: "Hashcat",
      desc: "We'll give them a few strings and details on some and have them solve as many passwords as possible. More instructions and details released on the 31st of January.",
      link: "https://hashcat.net/hashcat/",
      icon: Hashcat_Icon,
    },
    {
      title: "Mystery application",
      desc: "A mystery application that will be revealed at the competition.",
      icon: Question_mark,
    },
  ],
};

export default benchmarks;
