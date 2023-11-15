class Comment {
  /**
   * @param {object} args
   * @param {string} args.id
   * @param {string} args.username
   * @param {Date} args.date
   * @param {string} args.content
   * @param {number} args.likeCount
   * @param {boolean} args.isDeleted
   */
  constructor (args) {
    this.#verifyArgs(args)

    this.id = args.id
    this.username = args.username
    this.date = args.date
    this.likeCount = args.likeCount
    this.content = (args.isDeleted) ? '**komentar telah dihapus**' : args.content
  }

  #verifyArgs ({ id, username, date, content, likeCount, isDeleted }) {
    if (
      !id || !username || !date || !content ||
      typeof likeCount === 'undefined' || typeof isDeleted === 'undefined'
    ) {
      throw new Error('COMMENT.NOT_CONTAIN_NEEDED_PROPERTY')
    }

    if (
      typeof id !== 'string' || typeof username !== 'string' ||
      !(date instanceof Date) || typeof content !== 'string' ||
      typeof likeCount !== 'number' || typeof isDeleted !== 'boolean'
    ) {
      throw new Error('COMMENT.NOT_MEET_DATA_TYPE_SPECIFICATION')
    }
  }
}

module.exports = Comment
