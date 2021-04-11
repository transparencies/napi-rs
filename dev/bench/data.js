window.BENCHMARK_DATA = {
  lastUpdate: 1618121613645,
  repoUrl: 'https://github.com/napi-rs/napi-rs',
  entries: {
    Benchmark: [
      {
        commit: {
          author: {
            email: 'lynweklm@gmail.com',
            name: 'LongYinan',
            username: 'Brooooooklyn',
          },
          committer: {
            email: 'lynweklm@gmail.com',
            name: 'LongYinan',
            username: 'Brooooooklyn',
          },
          distinct: true,
          id: '7c81e48da63f448521f3d7050da531cda8a7b49e',
          message: 'ci: change the docker login username',
          timestamp: '2021-04-11T14:09:45+08:00',
          tree_id: '77a27895973d611e653fd7100ba9633c139fbe3f',
          url:
            'https://github.com/napi-rs/napi-rs/commit/7c81e48da63f448521f3d7050da531cda8a7b49e',
        },
        date: 1618121611997,
        tool: 'benchmarkjs',
        benches: [
          {
            name: 'noop#napi-rs',
            value: 54961374,
            range: '±0.19%',
            unit: 'ops/sec',
            extra: '96 samples',
          },
          {
            name: 'noop#JavaScript',
            value: 719147382,
            range: '±0.12%',
            unit: 'ops/sec',
            extra: '96 samples',
          },
          {
            name: 'Plus number#napi-rs',
            value: 16713970,
            range: '±0.27%',
            unit: 'ops/sec',
            extra: '93 samples',
          },
          {
            name: 'Plus number#JavaScript',
            value: 718743092,
            range: '±0.15%',
            unit: 'ops/sec',
            extra: '97 samples',
          },
          {
            name: 'Create buffer#napi-rs',
            value: 84417,
            range: '±25.36%',
            unit: 'ops/sec',
            extra: '65 samples',
          },
          {
            name: 'Create buffer#JavaScript',
            value: 77971,
            range: '±82.6%',
            unit: 'ops/sec',
            extra: '90 samples',
          },
          {
            name: 'Get Set property#Get Set from native#u32',
            value: 406640,
            range: '±18.9%',
            unit: 'ops/sec',
            extra: '74 samples',
          },
          {
            name: 'Get Set property#Get Set from JavaScript#u32',
            value: 388204,
            range: '±5.79%',
            unit: 'ops/sec',
            extra: '82 samples',
          },
          {
            name: 'Get Set property#Get Set from native#string',
            value: 409999,
            range: '±3.07%',
            unit: 'ops/sec',
            extra: '85 samples',
          },
          {
            name: 'Get Set property#Get Set from JavaScript#string',
            value: 379641,
            range: '±2.86%',
            unit: 'ops/sec',
            extra: '89 samples',
          },
          {
            name: 'Async task#spawn task',
            value: 36649,
            range: '±0.71%',
            unit: 'ops/sec',
            extra: '84 samples',
          },
          {
            name: 'Async task#thread safe function',
            value: 1259,
            range: '±177.7%',
            unit: 'ops/sec',
            extra: '76 samples',
          },
        ],
      },
    ],
  },
}
