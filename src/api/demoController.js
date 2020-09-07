class DemoController {
  constructor() { }

  async demo(ctx) {
    ctx.body = {
      message: 'demo message'
    }
  }
}

export default new DemoController;